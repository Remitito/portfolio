import "../assets/About.css";
import "../assets/Education.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const About = () => {
  const [interests] = useState([
    "OCR",
    "Cinema",
    "Writing",
    "Boxing",
    "Gaming",
  ]);
  const [info] = useState([
    "In 2023, I completed the Spartan Trifecta across China and England",
    "My favorite directors are Hitchcock and Scorsese",
    "I had an essay published in Hektoen International medical humanities journal",
    "My favorite boxers are Inoue and Canelo",
    "I particularly enjoy Bethesda and Nintendo games",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [interests]);
  return (
    <div className="h-screen w-screen flex md:flex-wrap flex-col ">
      <div className="mt-8 mb-8 h-2/5 w-screen flex flex-row justify-evenly">
        <div className="w-2/5">
          <h2 className="font-roboto text-5xl text-center mb-6">About Me</h2>
          <ul className="font-comic text-2xl">
            <li className="my-8">
              I learned to code to create digital solutions to educational
              challenges I faced while working as a teacher
            </li>
            <li className="my-8">
              I have built several websites using the MERN stack which are used
              by students and teachers in China (see Projects section)
            </li>
            <li>I am now working as a software developer at Windey Energy</li>
          </ul>
        </div>
        <div className="w-2/4">
          <h2 className="font-roboto text-5xl text-center mb-6">Skills</h2>
          <table>
            <thead>
              <tr>
                <th>Web Development</th>
                <th>Back End</th>
                <th>Collaboration</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML/CSS (Tailwind)</td>
                <td>Data Analytics (Python)</td>
                <td>Azure DevOps</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Typescript/JavaScript (React)</td>
                <td>Databases/Cloud (MongoDB)</td>
                <td>Version Control (Git)</td>
                <td>Mandarin</td>
              </tr>
              <tr>
                <td>CMS (WordPress/Strapi)</td>
                <td>Node/Express</td>
                <td>Pair Programming/Stand ups</td>
                <td>Spanish</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-2/5 w-screen flex flex-row justify-evenly">
        <div className="w-2/5">
          <h2 className="font-roboto text-5xl text-center mb-6">Interests</h2>
          <div className="photoFrame">
            <img src={`/interests/${interests[currentIndex]}.jpg`} />
            <div className="photoTitle">{interests[currentIndex]}</div>
            <label className="photoInfo">{info[currentIndex]}</label>
          </div>
        </div>
        <div className="w-2/4">
          <h2 className="font-roboto text-5xl text-center mb-6">Education</h2>
          <ul className="educationList">
            <label className="educationLabel">
              In 2021, I started a master's degree in Computer Science at Bath
              University. Notable projects include:{" "}
            </label>
            <li>
              A team-developed Java command-line banking interface, embracing
              Agile methodologies such as pair programming, daily standups, and
              version control via Git
            </li>
            <li>
              A CNN in Python using TensorFlow to discern images by age and
              gender
            </li>
            <li>
              A Haskell-built Lambda Calculus, complete with beta reduction
              functionalities
            </li>
          </ul>
        </div>
      </div>
      <div className="h-1/5">
        <Link to="projects" className="scroll" smooth={true} duration={500} />
      </div>
    </div>
  );
};

export default About;
