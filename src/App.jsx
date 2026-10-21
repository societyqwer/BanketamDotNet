import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Auth from './components/Auth'; // ВАЖНО: Импортируем наш новый Auth
import Cabinet from './components/Cabinet';
import Order from './components/Order';
import Admin from './components/Admin';

function App() {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

    return (
        <Router>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth setCurrentUser={setCurrentUser} />} />

                <Route path="/cabinet" element={currentUser ? <Cabinet currentUser={currentUser} /> : <Navigate to="/auth" />} />
                <Route path="/order" element={currentUser ? <Order currentUser={currentUser} /> : <Navigate to="/auth" />} />
                <Route path="/admin" element={currentUser && currentUser.login === 'admin' ? <Admin /> : <Navigate to="/auth" />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;