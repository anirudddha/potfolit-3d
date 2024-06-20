import React from 'react';
import pot from '../assets/images/pot.png';
import resto from '../assets/images/resto.png';
import sign from '../assets/images/sign.webp';
import telegram from '../assets/images/telegram.png';
import './project.css';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='' style={{ color: "#615EFC", textShadow: "2px 2px black" }}>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-5 leading-relaxed'>
      Over the years, I've worked on a variety of projects that truly reflect my love for technology and creativity. Each project has been an opportunity to solve interesting problems and create something valuable. From building sophisticated web apps and immersive 3D experiences to developing smart automation tools, my portfolio is a mix of innovation and practical solutions. I invite you to take a look at my work and see how I use the latest technologies to bring ideas to life.
      </p>

      <div className="container my-20">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img src={resto} className="img-fluid" alt="Restaurant Booking System" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Restaurant Booking System</h5>
                <p className="card-text my-3">
                  A Restaurant Booking System using the MERN stack (MongoDB, Express.js, React, Node.js), designed for secure user registration, real-time table availability, and efficient reservation management, showcasing modern web development skills.
                </p>
                <a style={{color:"blue",fontSize:"20px",fontWeight:"500"}} href="https://github.com/Aadarsh0307/Table-Tales-Frontend">link ⇥</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container my-20">
        <div className="card mb-3">
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">3D Portfolio</h5>
                <p className="card-text my-3">
                  A professional 3D Portfolio using Three.js and React, providing an interactive and visually captivating presentation of projects. This advanced portfolio enables users to explore work in a dynamic 3D environment, effectively showcasing expertise in web development and 3D graphics.
                </p>
                <a style={{color:"blue",fontSize:"20px",fontWeight:"500"}} href="https://github.com/anirudddha/potfolit-3d">link ⇥</a>
              </div>
            </div>
            <div className="col-md-4 img-container">
              <img src={pot} className="img-fluid" alt="3D Portfolio" />
            </div>

          </div>
        </div>
      </div>

      <hr />

      <div className="container my-20">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img src={telegram} className="img-fluid" alt="VIT Telegram ChatBot" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">VIT Telegram ChatBot</h5>
                <p className="card-text my-3">
                  A Telegram bot designed to provide comprehensive information about the VIT campus, offering users quick access to campus details, events, and resources, showcasing expertise in bot development and automation.
                </p>
                <a style={{color:"blue",fontSize:"20px",fontWeight:"500"}} href="https://github.com/anirudddha/Vit-Telegram-Bot">link ⇥</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
