import React from 'react';

import '../pages/styles/Resume.css'

export default function Resume() {

    return (
        <div className="resume-container">

            <h1>Resume</h1>
            <p>Download my <a href="https://docs.google.com/document/d/1vQRY0l5kiOPgXAWrhgDNLMuQsjIETqTOP7MwmBX0fug/edit?usp=share_link" rel="noopener noreferrer">Resume</a></p>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>

        </div>
    )
}