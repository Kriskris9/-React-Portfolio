import React from 'react';

import './pages/styles/Header.css'

function Header({ currentPage, handlePageChange }) {
    const changeColor = (e) => {
        e.target.classList.add("blue-color");
      };

    return (
        <header className="text-center ">
            <h1 className="text-white"> Kristina Ahn's Portfolio</h1>
            <nav>
                <ul>
                    <li className="nav-item">
                        <a
                            href="#AboutMe"
                            onClick={(e) => {
                                handlePageChange('AboutMe');
                                changeColor(e);
                            }}
                            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Resume"
                            onClick={(e) => {
                                handlePageChange('Resume');
                                changeColor(e);
                            }}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Portfolio"
                            onClick={(e) => {
                                handlePageChange('Portfolio');
                                changeColor(e);
                            }}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Contact"
                            onClick={(e) => {
                                handlePageChange('Contact');
                                changeColor(e);
                            }}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;