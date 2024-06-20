import React from 'react'
import './intor.css'
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/home');
    };
    return (

        <div className="welcome-container">
            <h1 className="welcome-title">WELCOME TO MY WORLD!</h1>
            <p className="welcome-subtitle">
                I’m Aniruddha, a competitive programmer and React developer passionate about crafting innovative and immersive 3D websites.
            </p>
            <button className="explore-button" onClick={handleButtonClick}>EXPLORE MY WORLD →</button>
        </div>
    )
}

export default Intro
