import React, { Component } from 'react';

import GEImage from '../images/ge.PNG';

class GEGSIApp extends Component {
    render() {
        return (
            <div class="work__box">
                <div class="work__text">
                    <h3>GE GSI iPad App</h3>
                    <p>
                        iPad app sales tool for the Gemstone Spectrial Imaging CT machine built by GE. This app was featured in the 2014 WWDC keynote.
                    </p>
                    <ul class="work__list">
                        <li>Objective C</li>
                        <li>JavaScript</li>
                        <li>JSON</li>
                    </ul>

                </div>
                <div class="work__image-box">
                    <img src={GEImage} class="work__image" alt="Project 3" />
                </div>
            </div>
        )
    }
}

export default GEGSIApp;