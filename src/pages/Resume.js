// create component for resume.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Resume</h1>
                    <hr />
                    <p>Download my <a href="https://drive.google.com/file/d/1zKj3q7r3zT3ZJ6KZj0g8hQ2D9v9zj6V0/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a></p>
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
                </Col>
            </Row>
        </Container>
    )

}