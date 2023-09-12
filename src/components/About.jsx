import React from 'react';
import '../assets/About.css'

const About = () => {
    return (
        <div>
            <div className='aboutMain'>
                <div className='leftAboutSection'>
                    <h2 className='aboutHeading'>About Me</h2>
                    <ul className='aboutList'>
                        <li>I learned to code to create solutions to educational challenges I faced while working as a teacher</li>
                        <li>I have built several websites using the MERN stack which are used by students and teachers in China (see Projects section)</li>
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