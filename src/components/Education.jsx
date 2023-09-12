import React from 'react';
import '../assets/Education.css'
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Education = () => {
    const [interests] = useState(['OCR', 'Cinema', 'Writing', 'Boxing', 'Gaming'])
    const [info] = useState(['In 2023, I completed the Spartan Trifecta across China and England',
                            'My favorite directors are Hitchcock and Scorsese',
                        'I had an essay published in Hektoen International medical humanities journal',
                        'My favorite boxers are Inoue and Canelo',
                        'I particularly enjoy Bethesda and Nintendo games'    
                    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [interests]);

    return (
        <div>
            <div className='educationMain'>
                <div className='leftEducationSection'>
                    <h2 className='educationHeading'>Interests</h2>
                    <div className='photoFrame'>
                            <img src={`/interests/${interests[currentIndex]}.jpg`}/>
                            <div className='photoTitle'>
                            {interests[currentIndex]}
                        </div>
                            <label className='photoInfo'>{info[currentIndex]}</label>
                    </div>
                </div>
                <div className='rightEducationSection'>
                    <h2 className='educationHeading'>Education</h2>
                    <ul className='educationList'>
                        <label className='educationLabel'>In 2021, I started a master's degree in Computer Science at Bath University. Notable projects include: </label>
                        <li>A team-developed Java command-line banking interface, embracing Agile methodologies such as pair programming, daily standups, and version control via Git</li>
                        <li>A CNN in Python using TensorFlow to discern images by age and gender</li>
                        <li>A Haskell-built Lambda Calculus, complete with beta reduction functionalities</li>                    
                    </ul>
                </div>
            </div>
            <div className='scrollCont'>
                <Link to="projects" className='scroll' smooth={true} duration={500}/>
            </div>
        </div>
    )
}

export default Education;