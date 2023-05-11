

import React from "react";
import "../pages/styles/Portfolio.css";
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"

function Portfolio() {
    return (
     
         
        <section id="portfolio">
        <h2>Portfolio</h2>

            <div className="project">
               
                <a href="https://sleepy-caverns-11679.herokuapp.com/">
                    <img src= {img2} alt=" Kristina Ahn"/>
                </a>
                <h3> Bryan's Coding Minions </h3>
                <div className="project-links">
                    <a href="https://sleepy-caverns-11679.herokuapp.com/">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/Bryans-Coding-Minions">View on GitHub</a>
                </div>
            </div>
            <div className="project">
                <a href="https://kriskris9.github.io/GigGrabber-by-KAMJ/">
                <img src={img6} alt=" Kristina Ahn"/>
                </a>
                <h3> GigGrabber</h3>
                <div className="project-links">
                    <a href="https://kriskris9.github.io/GigGrabber-by-KAMJ">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/GigGrabber-by-KAMJ">View on GitHub</a>
                </div>
            </div>
            <div className="project">
                <a href="https://arcane-taiga-56538.herokuapp.com/">
                <img src={img7} alt=" Kristina Ahn"/>
                </a>
                <h3> Tech-Blog</h3>
                <div className="project-links">
                    <a href="https://arcane-taiga-56538.herokuapp.com/">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/Tech-Blog">View on GitHub</a>
                </div>
            </div>
            <div className="project">
                <a href="https://stark-coast-39946.herokuapp.com">
                <img src={img5} alt=" Kristina Ahn"/>
                </a>
                <h3> Note Taker</h3>
                <div className="project-links">
                    <a href="https://stark-coast-39946.herokuapp.com">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/Note-Taker">View on GitHub</a>
                </div>
            </div>
            <div className="project">
                <a href="https://kriskris9.github.io/WeatherAPI/">
                <img src={img4} alt=" Kristina Ahn"/>
                </a>
                <h3> Weather API</h3>
                <div className="project-links">
                    <a href="https://kriskris9.github.io/WeatherAPI/">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/WeatherAPI">View on GitHub</a>
                </div>
            </div>
            <div className="project">
                <a href="https://kriskris9.github.io/Work-Day-Scheduler/">
                <img src={img3} alt=" Kristina Ahn"/>
                </a>
                <h3> Work Day Scheduler</h3>
                <div className="project-links">
                    <a href="https://kriskris9.github.io/Work-Day-Scheduler/">View Deployed App</a>
                    <a href="https://github.com/Kriskris9/Work-Day-Scheduler">View on GitHub</a>
                </div>
                
            </div>
          
        </section>


    );
}

export default Portfolio;
