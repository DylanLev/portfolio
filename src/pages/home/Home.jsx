import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';
import Projects from '../../components/projects/Projects.jsx';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
  <div className="hero-content">
    <h1>Dylan Levy</h1>
    <h2>Software Engineer & Full Stack Developer</h2>
    <div className="social-links">
      <a href="https://t.me/dylanlev"><FaTelegram /></a>
      <a href="https://github.com/DylanLev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/dylan-levy-a1a8211b0?utm_source=share&utm_campaign=share_via&utm_content=profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  </div>
  <div className="hero-image">
    <img src="/img/profilephoto.jpg" alt="Dylan Levy" />
  </div>
</header>

      <section className="intro">
        <h2>Welcome to my Portfolio</h2>
        <p>
          I'm a passionate Software Engineer and Full Stack Developer with a keen eye for creating elegant, 
          efficient, and user-friendly solutions. <br/> With expertise in both front-end and back-end technologies, 
          I bring ideas to life through code.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skill-list">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Java</span>
          <span>Python</span>
          <span>C</span>
          <span>Video/Photo Editing</span>
          <span>Hebrew</span>
          {/* Add more skills as needed */}
        </div>
      </section>

      <Projects />

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="https://t.me/dylanlev" className="contact-button">Contact Me</a>
      </section>
    </div>
  );
}

export default Home;