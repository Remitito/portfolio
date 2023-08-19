import React from 'react';
import '../assets/Projects.css'
import { Link } from 'react-scroll';
import canYouReadIt from '../assets/videos/canYouReadIt.mp4'
import {IoLibrarySharp} from 'react-icons/io5'

const Projects = () => {
    return (
        <>
            <div className='scrollCont'>
                <Link to="projects" className='scroll' smooth={true} duration={500}/>
            </div>
            <div className='projectsMain'>
                <h2 className='projectsHeader'>Projects</h2>
                <div className='projectsTable'>
                    <div className='projectCont'>
                        <div className='projectHeaderOne'>
                            <a className='projectOneLink' href='https://can-you-read-it-atd5.onrender.com/'>
                                <div className='iconAndTextOne'>
                                    <IoLibrarySharp className='projectOneLogo' /> 
                                    <label className='projectOneLabel'>CAN YOU READ IT?</label>
                                </div>
                            </a>
                            <label className='projectOneInfo'>
                                    Can You Read It gives the CEFR level of any digital text, then stores it in a database sorted by level for other language learners to browse
                            </label>
                        </div>
                        <div className='previewScreenOne'/>
                        <div className='projectStack'>
                        Node, Express, MongoDB, Mongoose, React, Cheerio, HTML, CSS, Styled Components
                        </div>
                    </div>
                    <div className='projectCont'>
                        <div className='projectHeaderTwo'>
                            <a className='projectTwoLink' href='https://inquizitive-l7wp.onrender.com/'>
                                <div className='inquizitiveTitle'>
                                    <label className='inAndItive'>In</label>
                                    <label className='quizWord'>QUIZ</label>
                                    <label className='inAndItive'>itive</label>
                                </div>
                            </a>
                            <label className='projectTwoInfo'>
                                    Inquizitive is an interactive quiz that combines the best bits of the games which cannot be accessed in China
                            </label>
                        </div>
                        <div className='previewScreenTwo'></div>
                        <label className='projectStack'>
                        Node, Express, MongoDB, Mongoose, React,  Redux, HTML, CSS, Ant Design, Vite
                        </label>
                    </div>
                    <div className='projectCont'>
                        <h2 className='projectHeaderThree'>Group Picker</h2>
                        <div className='previewScreenThree'></div>
                        <label className='projectStack'></label>
                    </div>
                    <div className='projectCont'>
                        <h2 className='projectHeaderFour'>Group Picker</h2>
                        <div className='previewScreenFour'></div>
                        <label className='projectStack'></label>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Projects;