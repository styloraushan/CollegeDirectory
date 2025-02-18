// update.js
import React, { useState } from 'react';
import './update.css'; // Import your CSS file for styling

const UpdateProfile = ({ student, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: student.name,
        department: student.department,
        year: student.year,
        email: student.email,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData); // Call the update function with the updated data
        alert('Profile updated successfully!'); // Alert user on successful update
    };

    return (
        <div className="update-container">
            <h2 className="update-title">Update Profile</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="update-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;