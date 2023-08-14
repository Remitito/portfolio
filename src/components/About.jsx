import React from 'react';
import '../assets/About.css'
// import { SlBookOpen } from "react-icons/si";

const About = () => {
    return (
        <div className='aboutMain'>
            <div className='leftAboutSection'>
                <h2 className='aboutHeading'>About Me</h2>
                <ul className='aboutList'>
                    <li>
                    <li>I began learning to code while in China; I completed many online courses and practice projects before starting a master's degree in Computer Science in 2021.</li>
                    <li> I have used the MERN stack to build web apps that help students/teachers in China</li>
                    </li>
                    <li>I am looking for a full time junior developer position based remotely or in the UK 
                    </li>
                </ul>
            </div>
            <div className='rightAboutSection'>
                <h2 className='aboutHeading'>Skills</h2>
            <table>
                <thead>
                    <tr>
                    <th>Frontend</th>
                    <th>Backend</th>
                    <th>Basic</th>
                    <th>Collaboration</th>
                    <th>Languages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>React JS, Redux</td>
                    <td>Node JS, Express</td>
                    <td>Python</td>
                    <td>Git, Slack, Trello</td>
                    <td>English</td>
                    </tr>
                    <tr>
                    <td>HTML, CSS</td>
                    <td>Mongo DB, Mongoose</td>
                    <td>Java</td>
                    <td>Scrums, Standups</td>
                    <td>Mandarin</td>
                    </tr>
                    <tr>
                    <td>Ant Design, Styled Components</td>
                    <td>Cheerio</td>
                    <td>Haskell</td>
                    <td>Pair Programming</td>
                    <td>Spanish</td>
                    </tr>

                </tbody>
            </table>
            </div>
        </div>
    )
}

export default About;