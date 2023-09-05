import React from 'react';
import '../assets/About.css'
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div style={{marginBottom: '100px'}}>
            <div className='scrollCont'>
                <Link to="about" className='scroll' smooth={true} duration={500}/>
            </div>
            <div className='aboutMain'>
                <div className='leftAboutSection'>
                    <h2 className='aboutHeading'>About Me</h2>
                    <ul className='aboutList'>
                        <li>I began learning to code while working in China; I did many online courses and practice projects before starting a master's degree in Computer Science in 2021.</li>
                        <li> I have used the MERN stack to build web apps that help students/teachers in China</li>
                        <li>I am looking for a full time junior developer position in an English, Chinese, or Spanish-speaking company (UK-based or remote) </li>
                    </ul>
                </div>
                <div className='rightAboutSection'>
                    <h2 className='aboutHeading'>Skills</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Frontend</th>
                        <th>Backend</th>
                        <th className='basicCol'>Basic Level</th>
                        <th>Collaboration</th>
                        <th>Languages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>React JS, Redux</td>
                        <td>Node JS, Express</td>
                        <td className='basicCol'>Python</td>
                        <td>Git, Slack, Trello</td>
                        <td>English</td>
                        </tr>
                        <tr>
                        <td>HTML, CSS</td>
                        <td>Mongo DB, Mongoose</td>
                        <td className='basicCol'>Java</td>
                        <td>Scrums, Standups</td>
                        <td>Mandarin</td>
                        </tr>
                        <tr>
                        <td>Ant Design, Styled Components</td>
                        <td>Cheerio</td>
                        <td className='basicCol'>Haskell</td>
                        <td>Pair Programming</td>
                        <td>Spanish</td>
                        </tr>

                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default About;