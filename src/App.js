import logo from './logo.svg';
import './App.css';
import Login from './LoginRelated/Login';
import Register from './LoginRelated/Register'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './Dashboard/Profile';
import { auth } from './Configuration';
import AddNewProb from './Dashboard/AddNewProb';
import Problems from './Dashboard/Problems';
import RoleDashboard from './Role/RoleDashboard';
import ProblemsR from './Role/ProblemsR';

function App() {
  let [user,setUser]=useState(null);
  useEffect(()=>{
         auth.onAuthStateChanged((user)=>{
          setUser(user);
         })
  },[]);
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={user?<Profile></Profile>:<Login></Login>}></Route>
            <Route path='/LoginRelated/login' element={<Login></Login>}></Route>
            <Route path='/LoginRelated/register' element={<Register></Register>}></Route>
            <Route path='/Dashboard/profile' element={<Profile></Profile>}></Route>
            <Route path='/Dashboard/AddNewProb' element={<AddNewProb></AddNewProb>}></Route>
            <Route path='/Dashboard/problems' element={<Problems></Problems>}></Route>
            <Route path='/Role/RoleDashboard' element={<RoleDashboard></RoleDashboard>}></Route>
            <Route path='/Role/ProblemsR' element={<ProblemsR></ProblemsR>}></Route>
         </Routes>
      </BrowserRouter>
     
     <ToastContainer/>  

    </>

    

  );
}

export default App;
