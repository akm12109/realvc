import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, doc, deleteDoc, query, where, getDocs } from 'firebase/firestore';

const ListPage = () => {
  const [notices, setNotices] = useState([]);
  const [classes, setClasses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [homework, setHomework] = useState([]);

  // Fetch notices
  useEffect(() => {
    const unsubscribeNotices = onSnapshot(collection(db, 'notices'), (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribeNotices();
  }, []);

  // Fetch classes
  useEffect(() => {
    const unsubscribeClasses = onSnapshot(collection(db, 'classes'), (snapshot) => {
      setClasses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribeClasses();
  }, []);

  // Fetch videos
  useEffect(() => {
    const unsubscribeVideos = onSnapshot(collection(db, 'videos'), (snapshot) => {
      setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribeVideos();
  }, []);

  // Fetch homework
  useEffect(() => {
    const unsubscribeHomework = onSnapshot(collection(db, 'homework'), (snapshot) => {
      setHomework(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribeHomework();
  }, []);

  // Delete individual item
  const handleDelete = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Delete all items in a section
  const handleDeleteAll = async (collectionName) => {
    try {
      const q = query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docItem) => {
        await deleteDoc(doc(db, collectionName, docItem.id));
      });
      alert('All items deleted successfully!');
    } catch (error) {
      console.error('Error deleting all items:', error);
    }
  };

  return (
    <div>
      <style>
        {`
          .list-page-container {
            padding: 20px;
            background-color: #f8f9fa;
            min-height: 100vh;
          }
          .section {
            margin-bottom: 40px;
          }
          .section h2 {
            color: #343a40;
            margin-bottom: 20px;
            font-size: 1.5rem;
          }
          .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
          .card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            position: relative;
          }
          .card h4 {
            color: #007bff;
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          .card p {
            color: #6c757d;
            margin-bottom: 10px;
          }
          .delete-btn, .delete-all-btn {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
          }
          .delete-all-btn {
            margin-top: 20px;
          }
        `}
      </style>

      <div className="list-page-container">

        {/* Notices Section */}
        <div className="section">
          <h2>Notices</h2>
          <div className="card-container">
            {notices.map(notice => (
              <div key={notice.id} className="card">
                <h4>Notice</h4>
                <p>{notice.message}</p>
                <button className="delete-btn" onClick={() => handleDelete('notices', notice.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button className="delete-all-btn" onClick={() => handleDeleteAll('notices')}>Delete All Notices</button>
        </div>

        {/* Classes Section */}
        <div className="section">
          <h2>Classes</h2>
          <div className="card-container">
            {classes.map(cls => (
              <div key={cls.id} className="card">
                <h4>{cls.subject}</h4>
                <p>Time: {new Date(cls.startTime).toLocaleString()}</p>
                <button className="delete-btn" onClick={() => handleDelete('classes', cls.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button className="delete-all-btn" onClick={() => handleDeleteAll('classes')}>Delete All Classes</button>
        </div>

        {/* Videos Section */}
        <div className="section">
          <h2>Videos</h2>
          <div className="card-container">
            {videos.map(video => (
              <div key={video.id} className="card">
                <h4>{video.title}</h4>
                <button className="delete-btn" onClick={() => handleDelete('videos', video.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button className="delete-all-btn" onClick={() => handleDeleteAll('videos')}>Delete All Videos</button>
        </div>

        {/* Homework Section */}
        <div className="section">
          <h2>Homework</h2>
          <div className="card-container">
            {homework.map(hw => (
              <div key={hw.id} className="card">
                <h4>{hw.title}</h4>
                <button className="delete-btn" onClick={() => handleDelete('homework', hw.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button className="delete-all-btn" onClick={() => handleDeleteAll('homework')}>Delete All Homework</button>
        </div>

      </div>
    </div>
  );
};

export default ListPage;
