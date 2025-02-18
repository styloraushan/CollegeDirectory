import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css'; // Import your custom CSS file


const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset previous error
        setSuccess(''); // Reset previous success message

        try {
            const result = await axios.post('http://localhost:3001/register', {
                name,
                username,
                role,
                email,
                password,
                image,
            });

            if (result.data.message === "Email already registered") {
                setError("E-mail already registered! Please Login to proceed.");
            } else {
                setSuccess("Registered successfully! Please Login to proceed.");
                setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred during registration. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className='title'>Create New Account</h2>

                {/* Display error or success message */}
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-column">
                        <div className="form-group">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username"><strong>Username</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role"><strong>Role</strong></label>
                            <select className="form-control" id="role" value={role} onChange={(event) => setRole(event.target.value)} required>
                                <option value="">Select Role</option>
                                <option value="Student">Student</option>
                                <option value="Faculty">Faculty</option>
                                <option value="Administrator">Administrator</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="form-group">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image"><strong>Profile Image URL</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Image URL"
                                className="form-control"
                                id="image"
                                value={image}
                                onChange={(event) => setImage(event.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn">Register</button>
                </form>

                <p className='footer-text'>Already have an account?<Link to='/login'>Login</Link></p>
                
            </div>
        </div>
    );
};

export default Register;