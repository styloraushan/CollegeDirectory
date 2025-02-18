import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css'; // Import custom CSS for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });

            if (response.data.success) {
                // Store user data in localStorage
                localStorage.setItem('user', JSON.stringify(response.data.user));

                // Redirect based on user role
                const userRole = response.data.user.role;
                if (userRole === 'Administrator') {
                    navigate('/admin');
                } else if (userRole === 'Faculty') {
                    navigate('/faculty');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError('Invalid email or password. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className='login-title'>Welcome Back!</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
                <p className='register-link'>Don't have an account?</p>
                <Link to='/register' className="register-button">Register</Link>
            </div>
        </div>
    );
};

export default Login;