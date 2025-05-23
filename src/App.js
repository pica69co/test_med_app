// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Landing_Page from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login.js';
import Sign_Up from './Components/Sign_Up/Sign_Up.js';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js'
import Notification from './Components/Notifications/Notification.js';
import ReviewForm from './Components/ReviewForm/ReviewForm.js';
import ProfileForm from './Components/ProfileCard/ProfileCard.js';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout.js';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>          
          <Notification />
          <Routes>
            <Route path='/' element={<Landing_Page/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/sign_up' element={<Sign_Up />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/reviews" element={<ReviewForm/>}/>
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/reports" element={<ReportsLayout />} />
          </Routes>          
        </BrowserRouter>
    </div>
  );
}

export default App;