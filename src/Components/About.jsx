import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
             <header >
                <h3 style={{fontWeight:'bolder'}}>ReactRouter</h3>
                <nav>
                    <ul style={{display:'flex',alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <h1>ABOUT</h1>
        </div>
    );
};

export default About;