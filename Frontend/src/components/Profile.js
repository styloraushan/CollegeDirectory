import React, { useState } from 'react';
import './Profile.css'; // Make sure to import your CSS file
import UpdateProfile from './update'; // Import the UpdateProfile component

const Profile = () => {
    const [isUpdating, setIsUpdating] = useState(false); // State to control visibility of update form
    const [student, setStudent] = useState({
        name: 'Raushan Kumar',
        department: 'Computer Science',
        year: '2024',
        email: 'raushanmansagar12345@gmail.com',
    });

    const handleUpdate = (updatedData) => {
        setStudent(updatedData);
        setIsUpdating(false); // Close the update form after updating
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">Profile</h2>
            <div className="profile-content">
                <img src="https://avatars.githubusercontent.com/u/142259385?v=4" alt="Profile" className="profile-image" />
                <div className="profile-details">
                    <div className="details-row">
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>Department:</strong> {student.department}</p>
                        <p><strong>Year:</strong> {student.year}</p>
                        <p><strong>Email:</strong> {student.email}</p>
                    </div>
                    <button className="update-button" onClick={() => setIsUpdating(true)}>Update</button>
                </div>
                {isUpdating && <UpdateProfile student={student} onUpdate={handleUpdate} />} {/* Show the UpdateProfile component when updating */}
            </div>
        </div>
    );
};

export default Profile;