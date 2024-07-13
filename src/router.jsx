// router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Settings from './pages/Settings';
import LoginPage from './pages/LoginPage';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore/*" element={<Explore />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/resources" element={<div>resources</div>} />
        </Routes>
      </Router>
    );
  };

export default AppRouter;
