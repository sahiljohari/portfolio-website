import React from 'react';
import { content } from './content';
import './style.css';

const AboutSection = () => {
    return (
        <div className='root'>
            <div className='sectionTitle'>{content.sectionTitle}</div>
            <div className='content'>
                <div className='display-img'>
                    <img src="assets/Me.JPG" alt="profile" />
                </div>
                <div className='content-text'>
                    <p>{content.introParagraph}</p>
                    <p>{content.backgroundParagraph}</p>
                    <p>{content.technologies.titleText}</p>
                    <div className='tech-list'>
                        <ul>
                            {content.technologies.techStack.map((t, i) => (<li key={i}>{t}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;