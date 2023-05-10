import React from 'react';
import '../styles/Header.css';


export default function Header() {
    return (
        <header className="text-center ">
            <h1 className="text-white"> Kristina Ahn's Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <a className="navLinks" href="#AboutMe">About Me</a>
                    </li>
                    <li>

                        <a className="navLinks" href="#Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="navLinks" href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a className="navLinks" href="#Resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}