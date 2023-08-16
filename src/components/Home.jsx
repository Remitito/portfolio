import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/Home.css';
import { HelloWorld } from './HelloWorld';

const Home = () => {
    return (
        <div className='homeMain'>
            <div className='homeLeft'>
                <div className='homeTextCont'>
                    <h2 className='hey'>Hey there!</h2>
                    <label className='homeAbout'>I'm a MERN stack developer who loves languages</label>
                </div>
                    <img className='avatar' src={'./myAvatar.png'} alt="My Avatar" />
            </div>
            <div className='homeRight'>
                <HelloWorld position='bubble top-left' textToType={"¡Hola, mundo!"}/>
                <HelloWorld position='bubble top-right' textToType={"你好世界"}/>
                <HelloWorld position='bubble bottom-right' textToType={"Hello World!"}/>
            </div>
        </div>
    );
};

export default Home;
