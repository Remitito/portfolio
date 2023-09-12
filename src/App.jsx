import React from 'react';
import { Element } from 'react-scroll';
import About from './components/About';
import Home from './components/Home'
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Education from './components/Education';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="sections">
      <Element className='homeSection' name="home">
          <Home />
      </Element>
        <Element  name="about">
          <About />
        </Element>
        <Element  name="education">
          <Education />
        </Element>
        <Element  name="projects">
          <Projects />
        </Element>
        <Element className='contactSection' name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
