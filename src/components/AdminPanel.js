import React, { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'; // For navigation
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // For image upload

const AdminPanel = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const navigate = useNavigate(); // Initialize navigation

  const [noticeMessage, setNoticeMessage] = useState('');
  const [classSubject, setClassSubject] = useState('');
  const [classTime, setClassTime] = useState('');
  const [classJitsiLink, setClassJitsiLink] = useState('meet.jitsi.com/VideoXClass'); // Set default value here
  const [videoTitle, setVideoTitle] = useState('');
  const [homeworkTitle, setHomeworkTitle] = useState('');
  const [homeworkPhoto, setHomeworkPhoto] = useState(null); // State to handle homework image
  const [homeworkPhotoURL, setHomeworkPhotoURL] = useState(''); // To store the image URL after upload

  // Input validation
  const validateClassInput = () => {
    return classSubject && classTime && classJitsiLink;
  };

  const handleAddNotice = async () => {
    try {
      if (!noticeMessage) {
        alert('Notice message cannot be empty');
        return;
      }
      await addDoc(collection(db, 'notices'), {
        message: noticeMessage,
        createdAt: new Date(),
      });
      setNoticeMessage('');
      alert('Notice added successfully!');
    } catch (error) {
      console.error('Error adding notice:', error.message);
    }
  };

  const handleAddClass = async () => {
    if (!validateClassInput()) {
      alert('Please fill out all fields for the class');
      return;
    }
    try {
      await addDoc(collection(db, 'classes'), {
        subject: classSubject,
        startTime: new Date(classTime).toISOString(),
        jitsiLink: classJitsiLink,
      });
      setClassSubject('');
      setClassTime('');
      setClassJitsiLink('meet.jitsi.com/VideoXClass'); // Reset to default link
      alert('Class added successfully!');
    } catch (error) {
      console.error('Error adding class:', error.message);
    }
  };

  const handleAddVideo = async () => {
    try {
      if (!videoTitle) {
        alert('Video title cannot be empty');
        return;
      }
      await addDoc(collection(db, 'videos'), {
        title: videoTitle,
        createdAt: new Date(),
      });
      setVideoTitle('');
      alert('Video added successfully!');
    } catch (error) {
      console.error('Error adding video:', error.message);
    }
  };

  const handleHomeworkPhotoChange = (e) => {
    if (e.target.files[0]) {
      setHomeworkPhoto(e.target.files[0]);
    }
  };

  const handleAddHomework = async () => {
    if (!homeworkTitle || !homeworkPhoto) {
      alert('Homework title and photo cannot be empty');
      return;
    }

    // Upload photo to Firebase Storage
    const photoRef = ref(storage, `homework_photos/${homeworkPhoto.name}`);
    const uploadTask = uploadBytesResumable(photoRef, homeworkPhoto);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress monitoring (optional)
      },
      (error) => {
        console.error('Error uploading homework photo:', error.message);
      },
      async () => {
        // Get download URL after successful upload
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setHomeworkPhotoURL(downloadURL); // Store the image URL

        try {
          // Store the homework details in Firestore along with the photo URL
          await addDoc(collection(db, 'homework'), {
            title: homeworkTitle,
            photoURL: downloadURL,
            createdAt: new Date(),
          });
          setHomeworkTitle('');
          setHomeworkPhoto(null);
          alert('Homework added successfully!');
        } catch (error) {
          console.error('Error adding homework:', error.message);
        }
      }
    );
  };

  // Redirect to login if not logged in
  if (!user) {
    navigate('/login'); 
    return null; // Render nothing before redirect
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>

      {/* Add Notice */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Notice</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Notice message"
            value={noticeMessage}
            onChange={(e) => setNoticeMessage(e.target.value)}
            className="p-3 border rounded-md"
          />
          <button
            onClick={handleAddNotice}
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Add Notice
          </button>
        </div>
      </div>

      {/* Add Class */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Class</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Class subject"
            value={classSubject}
            onChange={(e) => setClassSubject(e.target.value)}
            className="p-3 border rounded-md"
          />
          <input
            type="datetime-local"
            value={classTime}
            onChange={(e) => setClassTime(e.target.value)}
            className="p-3 border rounded-md"
          />
          <input
            type="text"
            placeholder="Jitsi Meet link"
            value={classJitsiLink} // Value directly comes from the state
            onChange={(e) => setClassJitsiLink(e.target.value)} // Handle value change
            className="p-3 border rounded-md"
          />
          <button
            onClick={handleAddClass}
            className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
          >
            Add Class
          </button>
        </div>
      </div>

      {/* Add Video */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Video</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Video title"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="p-3 border rounded-md"
          />
          <button
            onClick={handleAddVideo}
            className="bg-purple-500 text-white p-3 rounded-md hover:bg-purple-600 transition"
          >
            Add Video
          </button>
        </div>
      </div>

      {/* Add Homework */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Homework</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Homework title"
            value={homeworkTitle}
            onChange={(e) => setHomeworkTitle(e.target.value)}
            className="p-3 border rounded-md"
          />
          <input
            type="file"
            onChange={handleHomeworkPhotoChange} // Handle photo input
            className="p-3 border rounded-md"
          />
          <button
            onClick={handleAddHomework}
            className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
          >
            Add Homework
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/list-all-messages')}  // Redirect to list page
          className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-900 transition"
        >
          Go to List Page
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
