import React from 'react';
import { Element } from 'react-scroll';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="sections">
        <Element className='sectionOdd' name="about">
          <About />
        </Element>
        <Element className='sectionEven' name="projects">
          <Projects />
        </Element>
      </div>
    </div>
  );
};

export default App;
