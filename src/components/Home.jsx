import { useState, useEffect } from 'react';
import './styles.css';

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // True when typing, false when erasing

  const roles = [
    "Front End Developer",
    "Android Developer",
    "Python Developer",
    "Java Developer"
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseBetween = 2000;
    const pauseBeforeNextRole = 500;

    const role = roles[currentRoleIndex];

    if (isTyping) {
      if (charIndex < role.length) {
        const timeout = setTimeout(() => {
          setRoleText(role.substring(0, charIndex + 1)); // Update entire text at once
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), pauseBetween);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setRoleText(role.substring(0, charIndex - 1)); // Remove one character at a time
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setIsTyping(true);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, pauseBeforeNextRole);
      }
    }
  }, [charIndex, isTyping, currentRoleIndex]);

  return (
    <section id="home" className="about-section">
      <div className="container">
        <div className="row">
          {/* Left Container */}
          <div className="left-container">
            <div className="intro">
              <div className="profile-pic-container">
                <div className="rotateanimation top"></div>
                <div className="rotateanimation bottom"></div>
                <img src="src\components\profile-picture.jpg" alt="Varshini M" className="profile-pic" />
              </div>
              <div className="info">
                <h1 className="name typing-animation">Varshini M</h1>
                <p className="location">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
          {/* Right Container */}
          <div className="right-container">
            <h1 className="section-title">Hello!</h1>
            <h2 id="role-animation">I'm {roleText}</h2> {/* Displaying the animated roles */}
            <div className="about-content">
              <p>
                I am a passionate software developer dedicated to crafting innovative solutions
                that improve lives and drive efficiency. With expertise in web development and
                proficiency in Python, Django, and JavaScript, I thrive in environments that
                challenge me to learn and grow. My goal is to merge technology with creativity
                to deliver impactful results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
