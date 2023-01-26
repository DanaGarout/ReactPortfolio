import React from 'react';
import './About.css';
import about from '../assets/about.jpg';
import { CiUser } from "react-icons/ci";



export const About = () => {
  return (
    <div className='about-container'>
      <div className='flex-child'>
      <img className="aboutbg" src={about} alt='about picture'></img>
      </div>
      <div className='flex-child'>
      <h1 className='subtitle'><CiUser></CiUser>About Me</h1> 
            <p className='about-paragraph'>My name is Dana Garout, and I am based in Dammam, 
            Saudi Arabia. Studying computer science with a
             focus on web and mobile development in my last year
              at Goldsmiths, University of London.
              Building websites and mobile applications is my main area of emphasis,
               and frontend development is one of my main interests.</p>
      </div>

      
      {/* <div className='about-bg float-child'>
        <img className="aboutbg" src={about} alt='about picture'></img>
        </div>
        
        <div className='text-about float-child'> 
            <h1 className='subtitle'><CiUser></CiUser>About Me</h1>
            
            <p className='about-paragraph'>My name is Dana Garout, and I am based in Dammam, 
            Saudi Arabia. Studying computer science with a
             focus on web and mobile development in my last year
              at Goldsmiths, University of London.
              Building websites and mobile applications is my main area of emphasis,
               and frontend development is one of my main interests.</p>
              
        </div> */}
        
        
        
    </div>
  )
}
