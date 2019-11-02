import React from 'react';
import { content } from './content';
import './style.css';

const AboutSection = () => {
    return (
        <>
            <div className='sectionTitle'>{content.sectionTitle}</div>
            <div className='about'>
                <div className='content'>
                    <p>{content.introParagraph}</p>
                    <p>{content.backgroundParagraph}</p>
                </div>
                <div className='display-img'>
                    <p>[placeholder for image]</p>
                </div>
            </div>
        </>
    );
};

export default AboutSection;