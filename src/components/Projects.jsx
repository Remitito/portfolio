import React from 'react';
import '../assets/Projects.css'
import canYouReadIt from '../assets/videos/canYouReadIt.mp4'
import {IoLibrarySharp} from 'react-icons/io5'

const Projects = () => {
    return (
        <div className='projectsMain'>
            <h2 className='projectsHeader'>Projects</h2>
            <div className='projectsTable'>
                <div className='projectCont'>
                    <div className='projectHeaderOne'>
                        <a className='projectLink' href='https://can-you-read-it-atd5.onrender.com/'>
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
                        HTML, CSS, React, Node, Express, Mongoose, MongoDB, Styled Components
                    </div>
                </div>
                <div className='projectCont'>
                    <h2 className='projectHeaderTwo'>Inquizitive</h2>
                    <div className='previewScreenTwo'></div>
                    <label className='projectStack'></label>
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
    )
}

export default Projects;