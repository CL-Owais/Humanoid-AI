import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const toggleChatBox = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, { text: currentMessage, sender: 'user' }]);
      setCurrentMessage('');
      // Simulate a response from "Sonya"
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is an automated response.', sender: 'sonya' }]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-brand">cirruslabs</div>
        <ul className="navbar-nav">
          <li><a href="/">Solutions</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Company</a></li>
        </ul>
        <div className="navbar-contact">
          <span>CALL US: (877)431-0767 | INDIA | CANADA | MIDDLE EAST | USA</span>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-content">
          <h1>Digital Transformation, <span className="highlight">Simplified</span></h1>
          <p>Are you ready to step into a world of transformation? Let's embark on a journey that's as human as it is inspiring. Your journey is our journey.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="hero-image">
          <img src="/src/components/chatwomen.png" alt="Hero" />  {/* Update with correct image path */}
        </div>
        <button className="contact-us-btn">Contact us</button>
      </header>

      <section className="info-section">
        <h2>Who is CirrusLabs?</h2>
        <p>Our tagline, "Digital Transformation Simplified," isn't just a phrase; it's our commitment to making complex processes easy to understand and implement. Your journey is our journey, and together, we'll navigate the digital landscape, breaking down barriers and delivering results.</p>
        <button className="learn-more-btn">Learn more</button>
        <div className="info-media">
          <img src="/src/components/who.png" alt="Who is CirrusLabs?" />  {/* Update with correct image path */}
        </div>
      </section>

      <section className="solutions-section">
        <h2>Explore Our Solutions</h2>
        <p>Our expertise spans advanced AI applications to sophisticated SAP integrations to efficient GRC platforms and more. To fully understand how our solutions can benefit your business, we encourage you to watch our video overview. Dive deeper into our solutions and discover ways to accelerate your success.</p>
        <div className="solutions-media">
          <img src="/src/components/expert.png" alt="Explore Our Solutions" />  {/* Update with correct image path */}
        </div>
      </section>

      <div className="chat-button">
        <button onClick={toggleChatBox}>Chat with Sonya</button>
      </div>

      {isChatBoxVisible && (
        <div className="chat-box">
          <div className="chat-header">
            <img src="/src/components/chatwomen.png" alt="Hero" className="chat-hero-image" /> {/* Update with correct image path */}
            <span>Chat with Sonya</span>
            <button onClick={toggleChatBox} className="close-chat-btn">x</button>
          </div>
          <div className="chat-body">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={currentMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
