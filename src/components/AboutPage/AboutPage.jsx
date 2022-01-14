import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function AboutPage(){

    return (
        <div className="container">
            <ul className="about">
                <h1 className="about-title">About the Application</h1>
                    <h4>Hello! I'm Myles Lister and I'm the one who developed this application. </h4>
                    <h4>I’m a graduate of a full stack development program at devCodeCamp.</h4>
                    <h4>This application was built using technologies in the front-end like React.js and Axios for making the API calls. Edamam Food API to find the data on user input, Bootstrap and CSS for styling.</h4>
                    <h4>For the back-end, I used Django REST Framework to build the models and the web API. MySQL to store user, recipe information and JWT for authentication.</h4>
                    <h4>Supporting technologies were Postman for testing the end points, ensuring GET and POST were being made. Of course, Git and GitHub to store and share the code.</h4>
                    <a href="https://github.com/ListerM6"><FaGithub color='4CAF50' size='2rem'/></a>
                    <a href="https://www.linkedin.com/in/listerm6/"><FaLinkedin color='4CAF50' size='2rem'/></a>
            </ul>
        </div>
    )
}

export default AboutPage
