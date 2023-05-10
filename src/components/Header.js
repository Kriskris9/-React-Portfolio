import React from 'react';

export default function Header() {
    return (
        <header className="bg-secondary text-center p-3 mb-5">
            <h1 className="text-white"> Kristina Ahn's Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>

                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}