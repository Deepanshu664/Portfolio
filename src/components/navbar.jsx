import React from 'react'
import './navbar.css'

function Navbar() {
  return (
     <div className="navbar">
            <div className='menubar'><ion-icon name="reorder-three-outline"></ion-icon></div>
            <div className="name">
                Deepanshu
            </div>
            <div className="info">
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Resume</a>
                <a href="">About</a>
            </div>
        </div>
  )
}

export default Navbar