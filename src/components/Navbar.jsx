import React from 'react';
import { Link } from 'react-scroll';
import '../assets/Navbar.css';

const Navbar = () => {
    return (
    <div className='navCont'>
        <div className="nav">
            <div className='leftSection'>
                <Link to="home" smooth={true} duration={500}>Jack Rosser</Link>
            </div>
            <div className='rightSection'>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </div>
      </div>
    </div>
    )
}

export default Navbar;