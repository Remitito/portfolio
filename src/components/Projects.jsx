import React from 'react';
import '../assets/Projects.css'
import { Link } from 'react-scroll';
import canYouReadIt from '../assets/videos/canYouReadIt.mp4'
import {IoLibrarySharp} from 'react-icons/io5'
import {BsGithub } from "react-icons/bs";

const Projects = () => {
    return (
        <>
            <div className='projectsMain'>
                <h2 className='projectsHeader'>Projects</h2>
                <h4 className='projectsSubHeader'>(Click a project's title to try it out!)</h4>
                <div className='projectsTable'>
                    <div className='projectCont'>
                        <div className='projectHeaderOne'>
                            <div className='projectTitleCont'>
                                <a className='projectOneLink' href='https://can-you-read-it-atd5.onrender.com/'>
                                    <div className='iconAndTextOne'>
                                        <IoLibrarySharp className='projectOneLogo' /> 
                                        <label className='projectOneLabel'>CAN YOU READ IT?</label>
                                    </div>
                                </a>
                                <a href='https://github.com/Remitito/cyri-client'>
                                    <BsGithub className='gitLogoOne'/>
                                </a>
                            </div>
                            <label className='projectOneInfo'>
                                Can You Read It gives the CEFR level of any digital text, then stores it in a database sorted by level for other language learners to browse
                            </label>
                        </div>
                        <div className='previewScreenOne'/>
                    </div>
                    <div className='projectCont'>
                        <div className='projectHeaderTwo'>
                            <div className='projectTitleCont'>
                                <a className='projectTwoLink' href='https://inquizitive-l7wp.onrender.com/'>
                                    <div className='inquizitiveTitle'>
                                        <div className='inAndItive'>In</div>
                                        <div className='quizWord'>QUIZ</div>
                                        <div className='inAndItive'>itive</div>
                                    </div>
                                </a>
                                <a href='https://github.com/Remitito/quiz-game-client'>
                                    <BsGithub className='gitLogoTwo'/>
                                </a>
                            </div>
                            <label className='projectTwoInfo'>
                                    An interactive quiz review game that was made after existing platforms were blocked due to regional internet restrictions
                            </label>
                        </div>
                        <div className='previewScreenTwo'></div>
                    </div>
                    <div className='projectCont'>
                            <div className='projectHeaderThreeCont'>
                                <div className='projectTitleCont'>
                                    <div style={{width: '100px'}}>
                                        <a className='projectThreeLink' href='https://remitito.github.io/group-picker/'>
                                            <div className='projectHeaderThree'>Group Picker</div>
                                        </a>
                                    </div>
                                        <a href='https://github.com/Remitito/group-picker'>
                                            <BsGithub className='gitLogoThree'/>
                                        </a>
                                </div>                    
                            <label className='projectThreeInfo'>
                                    A website for quickly making groups with an "Avoid List" to keep disruptive students apart and the ability to edit groups without restarting the process
                            </label>
                        </div>
                        <div className='previewScreenThree'></div>
                    </div>
                    <div className='projectCont'>
                        <div className='projectHeaderFourCont'>
                            <label className='projectHeaderFour'>Coming Soon...</label>
                            <label className='projectFourInfo'>
                                A cross-platform React Native app that uses ChatGPT combined with text-to-speech services for authentic spoken language practice with a chatbot
                            </label>
                        </div>
                        <div className='previewScreenFour'></div>
                        <label className='projectFourPicInfo'>GIF by <a className='projectFourLink' href='https://giphy.com/Izispik/'>Izispik</a></label>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Projects;