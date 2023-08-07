import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/About.css';

const About = () => {
    const [typedText, setTypedText] = useState("");
  const textToType = "Hello World!";

  useEffect(() => {
    let typingTimer;
    if (typedText.length < textToType.length) {
      typingTimer = setTimeout(() => {
        setTypedText(textToType.substr(0, typedText.length + 1));
      }, 100); // 100ms delay between characters
    }

    return () => clearTimeout(typingTimer);
  }, [typedText]);


    return (
        <div className='aboutMain'>
            <div className='bubble top-left'>Hey!</div>
            <div className='bubble top-right'>¡Hola!</div>
            <div className='bubble bottom-left'>你好呀</div>
            <div className='bubble bottom-right'>
        <p>{typedText}</p>
      </div>
            <div className='aboutTextCont'>
                <h2>Hello</h2>
                <p>A MERN stack and language enthusiast</p>
            </div>
            <div className='avatarCont'>
                <img className='avatar' src={'./myAvatar.png'} alt="My Avatar" />
            </div>
        </div>
    );
};

export default About;