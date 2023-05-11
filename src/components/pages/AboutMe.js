import React from "react";
import "../pages/styles/AboutMe.css"
import img from "../../assets/1.png"

function AboutMe() {
  return (
    <div className = "AboutMe">
      <h2 className = "aboutMeTitle">About Me</h2>
      <img className = "profilePicture" src= {img} alt=" Kristina Ahn"/>
      <p className = "aboutMe">
I am a highly motivated and detail-oriented Full Stack Web Developer with a passion for creating dynamic and user-friendly web applications. With expertise in HTML, CSS, JavaScript, React, Node.js, and SQL, I prioritize empathy, user experience, and accessibility, delivering high-quality projects that exceed client expectations while constantly seeking new challenges to make a positive impact.</p>
    </div>
  );
}

export default AboutMe;
