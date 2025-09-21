import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: ''
    },
    education: [
      { degree: '', institution: '', year: '', gpa: '' }
    ],
    experience: [
      { title: '', company: '', duration: '', description: '' }
    ],
    projects: [
      { name: '', description: '', technologies: '' }
    ],
    skills: []
  });

  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (section, index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handlePersonalInfoChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addItem = (section) => {
    const newItem = section === 'education' 
      ? { degree: '', institution: '', year: '', gpa: '' }
      : section === 'experience'
      ? { title: '', company: '', duration: '', description: '' }
      : { name: '', description: '', technologies: '' };
    
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="resume">
      <div className="resume-container">
        <h1>Resume Generator</h1>
        
        <div className="resume-content">
          <div className="resume-form">
            <h2>Build Your Resume</h2>
            
            {/* Personal Information */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="form-section">
              <div className="section-header">
                <h3>Education</h3>
                <button type="button" onClick={() => addItem('education')} className="add-btn">
                  + Add Education
                </button>
              </div>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="form-item">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleInputChange('education', index, 'degree', e.target.value)}
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>
                    <div className="form-group">
                      <label>Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleInputChange('education', index, 'institution', e.target.value)}
                        placeholder="University Name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Year</label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => handleInputChange('education', index, 'year', e.target.value)}
                        placeholder="2020-2024"
                      />
                    </div>
                    <div className="form-group">
                      <label>GPA</label>
                      <input
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => handleInputChange('education', index, 'gpa', e.target.value)}
                        placeholder="3.8/4.0"
                      />
                    </div>
                  </div>
                  <button type="button" onClick={() => removeItem('education', index)} className="remove-btn">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="form-section">
              <div className="section-header">
                <h3>Experience</h3>
                <button type="button" onClick={() => addItem('experience')} className="add-btn">
                  + Add Experience
                </button>
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="form-item">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => handleInputChange('experience', index, 'title', e.target.value)}
                        placeholder="Software Developer Intern"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) => handleInputChange('experience', index, 'duration', e.target.value)}
                      placeholder="June 2023 - August 2023"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', index, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements"
                      rows="3"
                    />
                  </div>
                  <button type="button" onClick={() => removeItem('experience', index)} className="remove-btn">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="form-section">
              <div className="section-header">
                <h3>Projects</h3>
                <button type="button" onClick={() => addItem('projects')} className="add-btn">
                  + Add Project
                </button>
              </div>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="form-item">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleInputChange('projects', index, 'name', e.target.value)}
                      placeholder="E-commerce Website"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => handleInputChange('projects', index, 'description', e.target.value)}
                      placeholder="Brief description of the project"
                      rows="2"
                    />
                  </div>
                  <div className="form-group">
                    <label>Technologies</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => handleInputChange('projects', index, 'technologies', e.target.value)}
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <button type="button" onClick={() => removeItem('projects', index)} className="remove-btn">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="form-section">
              <h3>Skills</h3>
              <div className="skills-input">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <button type="button" onClick={addSkill} className="add-skill-btn">
                  Add Skill
                </button>
              </div>
              <div className="skills-list">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                    <button type="button" onClick={() => removeSkill(index)} className="remove-skill">
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="resume-preview">
            <h2>Resume Preview</h2>
            <div className="resume-paper">
              <div className="resume-header">
                <h1>{resumeData.personalInfo.name || 'Your Name'}</h1>
                <div className="contact-info">
                  <p>{resumeData.personalInfo.email || 'your.email@example.com'}</p>
                  <p>{resumeData.personalInfo.phone || '+1 (555) 123-4567'}</p>
                  <p>{resumeData.personalInfo.location || 'City, State'}</p>
                </div>
              </div>

              {resumeData.education.some(edu => edu.degree) && (
                <div className="resume-section">
                  <h2>Education</h2>
                  {resumeData.education.map((edu, index) => (
                    edu.degree && (
                      <div key={index} className="resume-item">
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution} | {edu.year} | GPA: {edu.gpa}</p>
                      </div>
                    )
                  ))}
                </div>
              )}

              {resumeData.experience.some(exp => exp.title) && (
                <div className="resume-section">
                  <h2>Experience</h2>
                  {resumeData.experience.map((exp, index) => (
                    exp.title && (
                      <div key={index} className="resume-item">
                        <h3>{exp.title}</h3>
                        <p className="company">{exp.company} | {exp.duration}</p>
                        <p className="description">{exp.description}</p>
                      </div>
                    )
                  ))}
                </div>
              )}

              {resumeData.projects.some(proj => proj.name) && (
                <div className="resume-section">
                  <h2>Projects</h2>
                  {resumeData.projects.map((project, index) => (
                    project.name && (
                      <div key={index} className="resume-item">
                        <h3>{project.name}</h3>
                        <p className="description">{project.description}</p>
                        <p className="technologies">Technologies: {project.technologies}</p>
                      </div>
                    )
                  ))}
                </div>
              )}

              {resumeData.skills.length > 0 && (
                <div className="resume-section">
                  <h2>Skills</h2>
                  <div className="skills-preview">
                    {resumeData.skills.map((skill, index) => (
                      <span key={index} className="skill-preview-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
