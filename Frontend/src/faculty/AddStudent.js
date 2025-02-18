import React, { useState } from 'react';
import './AddStudent.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [students, setStudents] = useState([]); // State to hold the list of students

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            name,
            photoUrl,
            email,
            phone,
        };

        // Update the students list with the new student
        setStudents([...students, newStudent]);
        alert('Student added successfully!');
        
        // Clear form fields after successful submission
        setName('');
        setPhotoUrl('');
        setEmail('');
        setPhone('');
    };

    return (
        <div className="add-student-container">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit} className="add-student-form">
                <div className="form-group">
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Photo URL:</label>
                    <input
                        type="url"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="add-button">Add Student</button>
            </form>

            {/* Table to display added students */}
            <h2>Students List</h2>
            {students.length > 0 ? (
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>
                                    <img
                                        src={student.photoUrl}
                                        alt={student.name}
                                        className="student-photo"
                                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                    />
                                </td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students added yet.</p>
            )}
        </div>
    );
};

export default AddStudent;