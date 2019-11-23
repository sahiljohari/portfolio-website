import React from 'react';
import { content } from './content';
import './style.css';

const AboutSection = () => {
    const { sectionTitle, introParagraph, university, universityHref, company, companyHref } = content;
    let styledText = content.backgroundParagraph.replace(university, universityHref).replace(company, companyHref);
    return (
        <div className='about'>
            <div className='sectionTitle'>{sectionTitle}</div>
            <div className='content'>
                <div className='display-img'>
                    <img src="assets/Me.JPG" alt="profile" />
                </div>
                <div className='content-text'>
                    <p>{introParagraph}</p>
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