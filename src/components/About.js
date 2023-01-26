import React from 'react';
import './About.css';
import about from '../assets/about.jpg';
import { CiUser } from "react-icons/ci";
import { Card } from './Card';


export const About = () => {
  return (
    <div className='about-page'>
        <img className="aboutbg" src={about} alt='about picture'></img>
        <div className='text-about'>
            <h1 className='about-title'><CiUser></CiUser>About Me</h1>
            <h2 className='subtitle'>Frontend Developer</h2>
            <p className='about-paragraph'>My name is Dana Garout, and I am based in Dammam, 
            Saudi Arabia. Studying computer science with a
             focus on web and mobile development in my last year
              at Goldsmiths, University of London.
              Building websites and mobile applications is my main area of emphasis, and frontend development is one of my main interests.</p>
              
              
        </div>
        
        
    </div>
  )
}
