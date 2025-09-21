import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const roadmapData = [
    {
      id: 1,
      title: "Foundation Phase",
      duration: "Months 1-3",
      skills: ["Basic Programming", "Mathematics", "Problem Solving"],
      description: "Build fundamental programming skills and mathematical foundations",
      status: "completed"
    },
    {
      id: 2,
      title: "Core Development",
      duration: "Months 4-6",
      skills: ["Data Structures", "Algorithms", "Web Development"],
      description: "Learn core computer science concepts and web technologies",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Specialization",
      duration: "Months 7-9",
      skills: ["React/Node.js", "Database Design", "API Development"],
      description: "Focus on full-stack development and modern frameworks",
      status: "pending"
    },
    {
      id: 4,
      title: "Advanced Topics",
      duration: "Months 10-12",
      skills: ["Cloud Computing", "DevOps", "System Design"],
      description: "Master advanced concepts and industry best practices",
      status: "pending"
    },
    {
      id: 5,
      title: "Portfolio & Job Prep",
      duration: "Months 13-15",
      skills: ["Portfolio Building", "Interview Prep", "Networking"],
      description: "Build impressive projects and prepare for job applications",
      status: "pending"
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      case 'pending': return 'status-pending';
      default: return 'status-pending';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✓';
      case 'in-progress': return '⟳';
      case 'pending': return '○';
      default: return '○';
    }
  };

  return (
    <div className="roadmap">
      <div className="roadmap-container">
        <h1>Generative Skill Roadmap</h1>
        <p className="roadmap-description">
          Your personalized learning path to become a successful software developer
        </p>
        
        <div className="timeline">
          {roadmapData.map((milestone, index) => (
            <div key={milestone.id} className={`timeline-item ${getStatusClass(milestone.status)}`}>
              <div className="timeline-marker">
                <span className="marker-icon">{getStatusIcon(milestone.status)}</span>
              </div>
              
              <div className="timeline-content">
                <div className="milestone-header">
                  <h3>{milestone.title}</h3>
                  <span className="duration">{milestone.duration}</span>
                </div>
                
                <p className="milestone-description">{milestone.description}</p>
                
                <div className="skills-list">
                  <h4>Key Skills:</h4>
                  <div className="skills-tags">
                    {milestone.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="progress-indicator">
                  <div className={`progress-bar ${getStatusClass(milestone.status)}`}>
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-text">
                    {milestone.status === 'completed' ? 'Completed' : 
                     milestone.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="roadmap-summary">
          <h3>Roadmap Summary</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">In Progress</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
