import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/Home.css';
import { HelloWorld } from './HelloWorld';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <>
            <div className='homeMain'>
                <div className='homeLeft'>
                    <div className='homeTextCont'>
                        <h2 className='hey'>Hey, I'm Jack!</h2>
                        <label className='homeAbout'>A MERN stack developer who loves languages</label>
                    </div>
                        <img className='avatar' src={'./myAvatar.png'} alt="My Avatar" />
                </div>
                <div className='homeRight'>
                    <HelloWorld position='bubble top-left' textToType={"¡Hola, mundo!"}/>
                    <HelloWorld position='bubble top-right' textToType={"你好世界"}/>
                    <HelloWorld position='bubble bottom-right' textToType={"Hello World!"}/>
                </div>
            </div>
            <div className='scrollCont'>
                <Link to="about" className='scroll' smooth={true} duration={500}/>
            </div>
        </>
    );
};

export default Home;
