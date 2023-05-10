import React from "react";
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className = "AboutMe">
      <h2 className = "aboutMeTitle">About Me</h2>
      <img className = "profilePicture" src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=" Kristina Ahn"/>
      <p className = "aboutMe">
I am a highly motivated and detail-oriented Full Stack Web Developer with a passion for creating dynamic and user-friendly web applications. With expertise in HTML, CSS, JavaScript, React, Node.js, and SQL, I prioritize empathy, user experience, and accessibility, delivering high-quality projects that exceed client expectations while constantly seeking new challenges to make a positive impact.</p>
    </div>
  );
}

export default AboutMe;
