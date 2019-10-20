import React from 'react';
import { content } from './content';
import './style.css';

const IntroSection = () => {
    return (
        <div className='intro'>
            <div className='intro-title'>
                <div className="greeting">{content.greeting}</div>
                <div className="intro-text">{content.introText} <span>{content.name}</span></div>
            </div>
            <div className="intro-description">{content.description}</div>
</div>
    );
};

export default IntroSection;