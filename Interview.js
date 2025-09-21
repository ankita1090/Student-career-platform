import React, { useState } from 'react';
import './Interview.css';

const Interview = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI interviewer. I'll ask you some technical questions to help you practice. Are you ready to begin?", sender: 'ai' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Tell me about yourself and your background in programming.",
    "What programming languages are you most comfortable with?",
    "Can you explain the difference between let, const, and var in JavaScript?",
    "How would you optimize a slow-running database query?",
    "Describe a challenging project you've worked on and how you overcame obstacles.",
    "What is the difference between REST and GraphQL APIs?",
    "How do you handle errors in your code?",
    "Explain the concept of closures in JavaScript.",
    "What testing strategies do you use in your development process?",
    "How do you stay updated with the latest technologies and best practices?"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user'
      };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: currentQuestion < questions.length - 1 
            ? questions[currentQuestion + 1]
            : "Great job! You've completed all the questions. This was excellent practice. Would you like to start over or try different questions?",
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
        setCurrentQuestion(prev => prev + 1);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const startNewInterview = () => {
    setMessages([{
      id: 1,
      text: "Hello! I'm your AI interviewer. I'll ask you some technical questions to help you practice. Are you ready to begin?",
      sender: 'ai'
    }]);
    setCurrentQuestion(0);
  };

  return (
    <div className="interview">
      <div className="interview-container">
        <h1>Mock Interview Practice</h1>
        <p className="interview-description">
          Practice your technical interview skills with our AI interviewer
        </p>
        
        <div className="interview-interface">
          <div className="chat-container">
            <div className="messages">
              {messages.map(message => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your answer here..."
                className="message-input"
              />
              <button onClick={handleSendMessage} className="send-btn">
                Send
              </button>
            </div>
          </div>
          
          <div className="interview-sidebar">
            <div className="question-panel">
              <h3>Current Question</h3>
              <p className="question-text">
                {questions[currentQuestion] || "Interview completed!"}
              </p>
              <div className="question-progress">
                <span>Question {Math.min(currentQuestion + 1, questions.length)} of {questions.length}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="tips-panel">
              <h3>Interview Tips</h3>
              <ul>
                <li>Think out loud while solving problems</li>
                <li>Ask clarifying questions if needed</li>
                <li>Explain your thought process</li>
                <li>Don't be afraid to say "I don't know"</li>
                <li>Show enthusiasm and curiosity</li>
              </ul>
            </div>
            
            <button onClick={startNewInterview} className="restart-btn">
              Start New Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
