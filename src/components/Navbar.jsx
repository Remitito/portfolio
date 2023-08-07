import React from 'react';
import { Link } from 'react-scroll';
import '../assets/Navbar.css';


const Navbar = () => {
    return (
        <div className="nav">
            <div className='leftSection'>
                <label>Jack Rosser</label>
            </div>
            <div className='rightSection'>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </div>
      </div>
    )
}

export default Navbar;