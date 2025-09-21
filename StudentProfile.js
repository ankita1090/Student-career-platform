import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './StudentProfile.css';

const StudentProfile = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    education: '',
    skills: '',
    interests: ''
  });

  const [performanceData] = useState([
    { subject: 'Mathematics', score: 85, color: '#8884d8' },
    { subject: 'Physics', score: 78, color: '#82ca9d' },
    { subject: 'Chemistry', score: 92, color: '#ffc658' },
    { subject: 'Biology', score: 88, color: '#ff7300' },
    { subject: 'English', score: 75, color: '#00ff00' },
    { subject: 'Computer Science', score: 90, color: '#0088fe' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="student-profile">
      <div className="profile-container">
        <h1>Student Profile</h1>
        
        <div className="profile-content">
          <div className="profile-form-section">
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={studentData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={studentData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="education">Education Level:</label>
                <select
                  id="education"
                  name="education"
                  value={studentData.education}
                  onChange={handleInputChange}
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="skills">Skills:</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={studentData.skills}
                  onChange={handleInputChange}
                  placeholder="List your skills (e.g., Programming, Communication, Leadership)"
                  rows="3"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="interests">Interests:</label>
                <textarea
                  id="interests"
                  name="interests"
                  value={studentData.interests}
                  onChange={handleInputChange}
                  placeholder="List your interests and career goals"
                  rows="3"
                />
              </div>
              
              <button type="submit" className="submit-btn">Update Profile</button>
            </form>
          </div>
          
          <div className="performance-section">
            <h2>Subject-wise Performance</h2>
            <div className="charts-container">
              <div className="chart-item">
                <h3>Performance Bar Chart</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="chart-item">
                <h3>Performance Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ subject, score }) => `${subject}: ${score}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="score"
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
