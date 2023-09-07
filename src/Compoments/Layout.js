import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavbarHeader from './Navbar/Navbar';
import Home from './Home/Home';
import LoginLayout from './Login/login';
import SearchLayout from './Search/Search';
import FeedbackLayout from './Feedback/Feedback';

export default function Layout() {
  return (
    <div>
      <Router>
        <div className="h-screen w-full">
          <NavbarHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchLayout />}/>
            <Route path="/feedback" element={<FeedbackLayout />}/>
            <Route path="/login" element={<LoginLayout />}/>
            </Routes>
        </div>
      </Router>
       
    </div>
    
    
  );
}
