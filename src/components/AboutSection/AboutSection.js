import React from 'react';
import { content } from './content';
import './style.css';

const AboutSection = () => {
    // Can we use useMemo hook here?
    let styledText = content.backgroundParagraph.replace(content.university, '<a href="https://www.smu.edu/" target="_blank">'+content.university+'</a>');
    styledText = styledText.replace(content.company, '<a href="https://www.riversagile.com/" target="_blank">'+content.company+'</a>');
    return (
        <div className='root'>
            <div className='sectionTitle'>{content.sectionTitle}</div>
            <div className='content'>
                <div className='display-img'>
                    <img src="assets/Me.JPG" alt="profile" />
                </div>
                <div className='content-text'>
                    <p>{content.introParagraph}</p>
                    <p dangerouslySetInnerHTML={{__html: styledText}}></p>
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