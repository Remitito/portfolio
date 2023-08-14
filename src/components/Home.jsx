import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/Home.css';
import { HelloWorld } from './HelloWorld';

const About = () => {
    return (
        <div className='homeMain'>
            <HelloWorld position='bubble top-left' textToType={"¡Hola, mundo!"}/>
            <HelloWorld position='bubble top-right' textToType={"你好世界"}/>
            <HelloWorld position='bubble bottom-right' textToType={"Hello World!"}/>
            <HelloWorld position='bubble bottom-left' textToType={"I am MERN stack developer!"}/>
            <div className='homeTextCont'>
                <h2 className='hey'>Hey there!</h2>
            </div>
            <div className='avatarCont'>
                <img className='avatar' src={'./myAvatar.png'} alt="My Avatar" />
            </div>
        </div>
    );
};

export default About;
