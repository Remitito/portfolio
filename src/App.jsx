import React from 'react';
import { Element } from 'react-scroll';
import About from './components/About';
import Home from './components/Home'
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="sections">
      <Element style={{height: "800px"}} name="home">
          <Home />
      </Element>
        <Element  name="about">
          <About />
        </Element>
        <Element  name="projects">
          <Projects />
        </Element>
        <Element style={{backgroundColor: "#f0f0f0", height: "500px"}} name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
