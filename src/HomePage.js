import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Sulekha Devi Mission School</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-300">About Us</Link>
            </li>
            <li>
              <Link to="/courses" className="text-white hover:text-yellow-300">Courses</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-yellow-300">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white text-center py-20 ">
        <h1 className="text-6xl font-bold">Welcome to Sulekha Devi Mission School</h1>
        <p className="mt-4 text-xl">Nurturing young minds for a brighter future</p>
        <Link to="/login">
          <button className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-200 transition duration-300">
            Join Us Today
          </button>
        </Link>
      </header>

      {/* About Us Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            At Sulekha Devi Mission School, we believe in fostering a holistic learning environment where students
            can excel academically and grow personally. Our experienced faculty is dedicated to providing 
            quality education, ensuring each child reaches their full potential. We offer a diverse 
            curriculum that promotes critical thinking, creativity, and collaboration.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">Why Choose Sulekha Devi Mission School?</h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experienced Faculty</h3>
              <p className="text-gray-600">Our teachers are passionate about educating young minds and guiding them towards success.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Our curriculum covers academic, extracurricular, and personal development aspects.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Modern Facilities</h3>
              <p className="text-gray-600">We offer state-of-the-art facilities, including a library, sports complex, and computer labs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">Courses We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
              <p className="text-gray-600">Advanced math courses designed to challenge and inspire analytical thinking.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Science</h3>
              <p className="text-gray-600">Explore the wonders of biology, chemistry, and physics through interactive experiments.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">History</h3>
              <p className="text-gray-600">Learn about the events and figures that shaped our world, from ancient times to today.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Arts</h3>
              <p className="text-gray-600">Our arts program encourages creativity through painting, sculpture, and design.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Physical Education</h3>
              <p className="text-gray-600">We promote physical health and teamwork through sports and fitness activities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Music</h3>
              <p className="text-gray-600">Our music program helps students develop an appreciation for different forms of music.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">Meet Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="teacher1.jpg" alt="Teacher" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Mr. John Doe</h3>
              <p className="text-gray-600">Mathematics Teacher with over 10 years of experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="teacher2.jpg" alt="Teacher" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ms. Jane Smith</h3>
              <p className="text-gray-600">Science Teacher known for her engaging teaching methods.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="teacher3.jpg" alt="Teacher" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Mrs. Emily Brown</h3>
              <p className="text-gray-600">History Teacher with a passion for storytelling and history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"Sulekha Devi Mission School has helped me grow academically and personally. The teachers are amazing, and I love the learning environment!"</p>
              <p className="mt-4 font-bold">- Alex Johnson, Class 5</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"The school's focus on holistic education has allowed me to explore my interests in both academics and extracurricular activities."</p>
              <p className="mt-4 font-bold">- Sarah Williams, Class 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Annual Sports Day</h3>
              <p className="text-gray-600">Join us for an exciting day of sports and fitness activities. Date: 25th October</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Science Exhibition</h3>
              <p className="text-gray-600">Explore innovative science projects from our students. Date: 15th November</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Parent-Teacher Meeting</h3>
              <p className="text-gray-600">Discuss your child's progress with their teachers. Date: 1st December</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">Contact Us</h2>
          <div className="flex justify-center">
            <form className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full p-3 border rounded-lg" rows="5"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sulekha Devi Mission School</h3>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-white hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
