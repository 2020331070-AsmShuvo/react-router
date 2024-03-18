import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
             <header >
                <h3 style={{fontWeight:'bolder'}}>ReactRouter</h3>
                <nav>
                    <ul style={{display:'flex',alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>

            <h1>CONTACT</h1>
        </div>
    );
};

export default Contact;