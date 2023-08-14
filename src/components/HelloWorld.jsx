import '../assets/Home.css';
import { useState, useEffect } from 'react';

export const HelloWorld = ({textToType, position}) => {
    const [typedText, setTypedText] = useState("");
  
    useEffect(() => {
      let typingTimer;
    
      if (typedText.length < textToType.length) {
        typingTimer = setTimeout(() => {
          setTypedText(textToType.substr(0, typedText.length + 1));
        }, 100); 
      } else {
        typingTimer = setTimeout(() => {
          setTypedText(""); 
        }, 1000); 
      }
    
      return () => clearTimeout(typingTimer);
    }, [typedText]);

    return (
        <div className={position}>
            <p>{typedText}</p>
        </div>
    )
}