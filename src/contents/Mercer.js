import React, { Component } from 'react';

import MercerImage from '../images/mercer-1.png';

class Mercer extends Component {
    render(){
        return (
            <div className="work__box">
                <div className="work__text">
                <h3>Mercer Marketplace iPad App</h3>
                <p>
                    UI Design and implementation of the Mercer Marketplace B2B iPad App.
                </p>
                <ul className="work__list">
                    <li>Photoshop</li>
                    <li>JavaScript</li>
                    <li>JSON</li>
                    <li>Objective C</li>
                </ul>

                </div>
                <div className="work__image-box">
                <img src={MercerImage} className="work__image" alt="Project 1" />
                </div>
            </div>
        )
    }
}

export default Mercer;