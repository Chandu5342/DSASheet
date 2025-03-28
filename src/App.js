import './App.css';
import Login from './LoginRelated/Login';
import Register from './LoginRelated/Register';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Dashboard/Profile';
import { auth } from './Configuration';
import AddNewProb from './Dashboard/AddNewProb';
import Problems from './Dashboard/Problems';
import RoleDashboard from './Role/RoleDashboard';
import ProblemsR from './Role/ProblemsR';
import Demo from './Demo.js';

function App() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={user?<Profile/>:<Login />} />
          <Route path='/LoginRelated/login' element={<Login />} />
          <Route path='/LoginRelated/register' element={<Register />} />
          <Route path='/Dashboard/profile' element={<Profile />} />
          <Route path='/Dashboard/AddNewProb' element={<AddNewProb />} />
          <Route path='/Dashboard/problems' element={<Problems />} />
          <Route path='/Role/RoleDashboard' element={<RoleDashboard />} />
          <Route path='/Role/ProblemsR' element={<ProblemsR />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
