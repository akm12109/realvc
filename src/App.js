// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'; // Import the Register component
import JitsiMeet from './components/JitsiMeet';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import HomePage from './HomePage';
import DeveloperSupport from './components/DeveloperSupport';
import ListPage from './components/ListPage';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element= {<HomePage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* Register route */}
        <Route path="/classroom" element={<JitsiMeet />} />
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/admin0dsfsdifiyrijh121212ssw" element= {<AdminPanel/>} />
        <Route path="/admin-login" element= {<AdminLogin />} /> 
        <Route path="/developer-support" element= {<DeveloperSupport/>}/>
        <Route path='/list-all-messages' element= {<ListPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
