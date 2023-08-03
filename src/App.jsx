import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
      </nav>

      <div className="sections">
        <Element className='section' name="home">
          <Home />
        </Element>
        <Element className='section' name="about">
          <About />
        </Element>
        <Element className='section' name="projects">
          <Projects />
        </Element>
      </div>
    </div>
  );
};

export default App;
