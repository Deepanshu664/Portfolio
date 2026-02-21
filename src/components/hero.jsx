import React from 'react'
import './hero.css'
import Deepanshu from '../assets/Deepanshu.png'


function Hero() {
  return (
     <div className="home-section">
            <div className="content">
                <div className="write-heading">
                    <h1 className="typing">Full Stack Developer</h1>
                </div>
                <div className="write-text">
                    <p><span>Hi I'm Deepanshu</span></p>
                    <p> Full Stack Developer Creating Modern Websites and Apps. </p>
                </div>
                <div className="btns">
                    <a href="" className="btn">My Projects</a>
                    <a href="" className="btn">Contact me</a>
                </div>
                
            </div>
            <div className="photo">
               <img src={Deepanshu} alt=""/>    
            </div>
        </div>
  )
}

export default Hero