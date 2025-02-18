// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './Login/LoginForm';
// import SignupForm from './SignUp/SignupForm';
import Dashboard from './components/Dashboard';
import Home from './components/signandlogin/Home';
import Login from './components/signandlogin/Login';
import Register from './components/signandlogin/Register';
import FacultyDashboard from './faculty/FacultyDashboard';
import AdminDashboard from './administrator/AdminDashboard';
const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <Routes>
                <Route path="/" element ={<Home/>} />
                <Route path="/register" element ={<Register/>} />
                <Route path="/login" element ={<Login/>} />
                <Route path="/home" element ={<Home/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faculty" element={<FacultyDashboard />} /> 
                    <Route path="/admin" element={<AdminDashboard />} /> 
                    {/* Add route for Faculty Dashboard */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;