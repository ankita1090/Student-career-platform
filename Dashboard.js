import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const subjectData = [
    { subject: 'Math', score: 85, improvement: 12 },
    { subject: 'Physics', score: 78, improvement: 8 },
    { subject: 'Chemistry', score: 92, improvement: 15 },
    { subject: 'Biology', score: 88, improvement: 5 },
    { subject: 'English', score: 75, improvement: 3 },
    { subject: 'CS', score: 90, improvement: 18 }
  ];

  const progressData = [
    { month: 'Jan', completed: 2 },
    { month: 'Feb', completed: 4 },
    { month: 'Mar', completed: 6 },
    { month: 'Apr', completed: 8 },
    { month: 'May', completed: 10 },
    { month: 'Jun', completed: 12 }
  ];

  const skillData = [
    { name: 'Programming', value: 85, color: '#8884d8' },
    { name: 'Mathematics', value: 78, color: '#82ca9d' },
    { name: 'Communication', value: 70, color: '#ffc658' },
    { name: 'Problem Solving', value: 88, color: '#ff7300' }
  ];

  const getWeakestSubject = () => {
    return subjectData.reduce((min, subject) => 
      subject.score < min.score ? subject : min
    );
  };

  const getStrongestSubject = () => {
    return subjectData.reduce((max, subject) => 
      subject.score > max.score ? subject : max
    );
  };

  const totalScore = subjectData.reduce((sum, subject) => sum + subject.score, 0);
  const averageScore = Math.round(totalScore / subjectData.length);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1>Student Dashboard</h1>
        
        <div className="dashboard-grid">
          {/* Overview Cards */}
          <div className="overview-cards">
            <div className="card">
              <div className="card-icon">📊</div>
              <div className="card-content">
                <h3>Average Score</h3>
                <p className="card-value">{averageScore}%</p>
                <span className="card-change">+5% from last month</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">🎯</div>
              <div className="card-content">
                <h3>Goals Completed</h3>
                <p className="card-value">8/12</p>
                <span className="card-change">67% completion rate</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">📈</div>
              <div className="card-content">
                <h3>Improvement</h3>
                <p className="card-value">+12%</p>
                <span className="card-change">This semester</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">⭐</div>
              <div className="card-content">
                <h3>Streak</h3>
                <p className="card-value">15 days</p>
                <span className="card-change">Keep it up!</span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-section">
            <div className="chart-container">
              <h3>Subject Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-container">
              <h3>Progress Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="completed" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Analysis Section */}
          <div className="analysis-section">
            <div className="analysis-card">
              <h3>Subject Analysis</h3>
              <div className="subject-analysis">
                <div className="strongest-subject">
                  <h4>🏆 Strongest Subject</h4>
                  <p className="subject-name">{getStrongestSubject().subject}</p>
                  <p className="subject-score">{getStrongestSubject().score}%</p>
                  <p className="subject-improvement">+{getStrongestSubject().improvement}% improvement</p>
                </div>
                
                <div className="weakest-subject">
                  <h4>📚 Needs Improvement</h4>
                  <p className="subject-name">{getWeakestSubject().subject}</p>
                  <p className="subject-score">{getWeakestSubject().score}%</p>
                  <p className="subject-improvement">+{getWeakestSubject().improvement}% improvement</p>
                </div>
              </div>
            </div>
            
            <div className="analysis-card">
              <h3>Skill Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={skillData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {skillData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommendations */}
          <div className="recommendations">
            <h3>Recommendations</h3>
            <div className="recommendation-list">
              <div className="recommendation-item">
                <div className="rec-icon">📖</div>
                <div className="rec-content">
                  <h4>Focus on {getWeakestSubject().subject}</h4>
                  <p>Your {getWeakestSubject().subject} score is below average. Consider spending more time on this subject.</p>
                </div>
              </div>
              
              <div className="recommendation-item">
                <div className="rec-icon">🎯</div>
                <div className="rec-content">
                  <h4>Set Weekly Goals</h4>
                  <p>Create specific, measurable goals for each subject to track your progress better.</p>
                </div>
              </div>
              
              <div className="recommendation-item">
                <div className="rec-icon">🤝</div>
                <div className="rec-content">
                  <h4>Join Study Groups</h4>
                  <p>Collaborate with peers to improve your understanding of difficult concepts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
