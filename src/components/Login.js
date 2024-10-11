// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; 
import { auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        setError('');
        navigate('/dashboard'); // Redirect to dashboard on successful login
      })
      .catch((error) => {
        setError('Invalid email or password');
        console.log(error);
      });
  };

  const handleAdminLogin = () => {
    navigate('/admin-login'); // Redirect to admin login page
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Side: School Info */}
      <div className="lg:w-1/2 w-full bg-blue-500 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Your School Name</h1>
        <p className="text-lg mb-2">Education for the future, learning for life.</p>
        <p className="text-md mb-6">Join us and explore the world of knowledge with creativity and fun!</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Interactive Online Classes</li>
          <li>Expert Teachers</li>
          <li>Safe and Engaging Learning Environment</li>
        </ul>
        <button 
          onClick={handleAdminLogin} 
          className="mt-4 bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
          Login Administrator
        </button>
      </div>

      {/* Right Side: Sign In Card */}
      <div className="lg:w-1/2 w-full bg-gradient-to-tr from-blue-100 to-yellow-100 flex justify-center items-center p-6">
        <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl duration-500">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-blue-800 text-sm font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-blue-800 text-sm font-bold mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
              Log In
            </button>
          </form>
          <p className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
