import React from 'react';

import './Home.css';
import logo from '../assets/logo.png';
import profile from "../assets/me.jpeg";
import { FaGithub,FaLinkedin,FaWhatsapp,FaHtml5,FaBootstrap,FaCode,
    FaReact,FaCss3 } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

export const Home = () => {
  
  return (
    
    <div className='home'>
        <div className='home-bg'>
            <div className='header d__flex align__items__center pxy__30'>
                <div className='logo'>
                    <img className="logo" src={logo} alt=""></img>
                </div>
 
                <div className='navigation px__30'>
                    <ul className="navbar d__flex">
                        <a href='#Home'><li className='focus nav__items mx__15'>Home</li></a>
                        <a href='#About'><li className='nav__items mx__15'>About</li></a>
                        <a href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
                        
                    </ul>
                </div>
                <div className='socials d__flex px__30'>
                    <ul><a target="_blank" href='https://github.com/DanaGarout'><li className='icons mx__15'><FaGithub></FaGithub></li></a></ul>
                    <ul><a href='https://www.linkedin.com/in/dana-garout-0824a91b1/' target="_blank"><li className='icons mx__15'><FaLinkedin></FaLinkedin></li></a></ul>
                    <ul><a target="_blank" href='https://wa.me/+966581802447'><li className='icons mx__15'><FaWhatsapp></FaWhatsapp></li></a></ul>
                    <ul><a target="_blank" href='danagarout5@gmail.com'><li className='icons mx__15'><SiGmail></SiGmail></li></a></ul>
                </div>
     
            </div>
            {/* Content */}
            <div className='container'>
                <div className='home__content'>
                    <div className='big-one'>
                    <div className='home__meta'>
                        <h1 className='home__text pz__10'>Welcome to my world</h1>
                        <h2 className='home__text pz__10'>Hi, Im Dana Garout</h2>
                        <h3 className='home__text sweet pz__10'>Frontend Developer</h3>
                        <h4 className='home__text pz__100'></h4>
                        
                    </div>
                    <div className='techs'>
                            <ul className='tech-list'>
                                <li className='tech-icon'><FaHtml5></FaHtml5></li>
                                <li className='tech-icon'><FaBootstrap></FaBootstrap></li>
                                <li className='tech-icon'><FaReact></FaReact></li>
                                <li className='tech-icon'><FaCss3></FaCss3></li>
                                <li className='tech-icon'><FaCode/></li>
                            </ul>

                        </div>
                        </div>
                    <div className='my-pic'>
                        <img className="profile" src={profile} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
