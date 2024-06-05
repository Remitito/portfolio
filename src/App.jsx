import { Element } from "react-scroll";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div>
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element className="contactSection" name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
