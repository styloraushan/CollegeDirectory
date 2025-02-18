import React, { useState, useEffect } from 'react';
import './Attendance.css'; // Import CSS for styling

const Attendance = () => {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        // Simulate fetching student data; replace with your API call
        const fetchStudents = async () => {
            const data = [
                {
                    id: 1,
                    name: 'Raushan Kumar',
                    email: 'raushan.kumar@university.edu',
                    photo: 'https://avatars.githubusercontent.com/u/142259385?v=4' // Placeholder image URL
                },
                {
                    id: 2,
                    name: 'Rahul Kumar',
                    email: 'rahul.doe@example.com',
                    photo: 'data:image/jpeg;base64,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' // Placeholder image URL
                },
                {
                    id: 3,
                    name: 'PragyaAstha',
                    email: 'Pragyaastha#@gmail.com',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmA8inGhnTFp21caM1nnoJSOzHrYtto0qPw&s' // Placeholder image URL
                }
                // Add more student objects as needed
            ];
            setStudents(data);
            // Initialize attendance state
            const initialAttendance = data.reduce((acc, student) => {
                acc[student.id] = 'present'; // Default all students to present
                return acc;
            }, {});
            setAttendance(initialAttendance);
        };

        fetchStudents();
    }, []);

    const handleAttendanceChange = (studentId, status) => {
        setAttendance((prev) => ({
            ...prev,
            [studentId]: status,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send attendance data to your API
        const response = await fetch('/api/take-attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendance),
        });

        if (response.ok) {
            alert('Attendance recorded successfully!');
        } else {
            alert('Failed to record attendance.');
        }
    };

    // Calculate present and absent students
    const presentStudents = students.filter(student => attendance[student.id] === 'present');
    const absentStudents = students.filter(student => attendance[student.id] === 'absent');

    return (
        <div className="attendance-container">
            <h2>Take Attendance</h2>
            <form onSubmit={handleSubmit} className="attendance-form">
                {students.map((student) => (
                    <div key={student.id} className="attendance-card">
                        <img src={student.photo} alt={student.name} className="student-photo" />
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.email}</p>
                        </div>
                        <div className="attendance-buttons">
                            <button
                                type="button"
                                className={`attendance-button present ${attendance[student.id] === 'present' ? 'active' : ''}`}
                                onClick={() => handleAttendanceChange(student.id, 'present')}
                            >
                                Present
                            </button>
                            <button
                                type="button"
                                className={`attendance-button absent ${attendance[student.id] === 'absent' ? 'active' : ''}`}
                                onClick={() => handleAttendanceChange(student.id, 'absent')}
                            >
                                Absent
                            </button>
                        </div>
                    </div>
                ))}
                <button type="submit" className="submit-attendance-button">Submit Attendance</button>
            </form>

            {/* Attendance Summary */}
            <h2>Attendance Summary</h2>
            <table className="attendance-summary-table">
                <thead>
                    <tr>
                        <th>Present Students</th>
                        <th>Absent Students</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {presentStudents.length > 0 ? (
                                <ol>
                                    {presentStudents.map(student => (
                                        <li key={student.id}>{student.name}</li>
                                    ))}
                                </ol>
                            ) : (
                                <p>No students present</p>
                            )}
                        </td>
                        <td>
                            {absentStudents.length > 0 ? (
                                <ol>
                                    {absentStudents.map(student => (
                                        <li key={student.id}>{student.name}</li>
                                    ))}
                                </ol>
                            ) : (
                                <p>No students absent</p>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Show totals */}
            <div className="attendance-totals">
                <p>Total Present: {presentStudents.length}</p>
                <p>Total Absent: {absentStudents.length}</p>
            </div>
        </div>
    );
};

export default Attendance;