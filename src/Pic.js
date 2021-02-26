import React from 'react';
import './Pic.css';

const Pic = () => {
    return (
        <div>
            <h1 className="text">Let's Go To Mars!</h1>
            <img src='images/rocket.png' alt='rocket-image' className="rocket-image" />
        </div>
    )
}

export default Pic;