import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function AboutPage(){

    return (
        <div className="container">
            <ul className="about">
                <h2 className="about-title">About the Developer</h2>
                    <p>Hello! I'm Myles Lister and I'm the one who developed this application. I’m family man of a future wife, father of two kids and a Marine Corp veteran.</p>
                    <p>I’m a student of a full stack development program at devCodeCamp.</p>
                    <p>I have the technological experience in JavaScript, HTML, CSS, React, Python, mySQL, Django Rest Framework, C#, LINQ.</p>
                    <p>I chose to pursue this career field to better myself and my family but also I want to create and innovate for the world. </p>
                    <p>Technology is constantly changing every day and I want to contribute to that change.</p>
                    <a href="https://github.com/ListerM6"><FaGithub color='4CAF50' size='2rem'/></a>
                    <a href="https://www.linkedin.com/in/listerm6/"><FaLinkedin color='4CAF50' size='2rem'/></a>
            </ul>
        </div>
    )
}

export default AboutPage
