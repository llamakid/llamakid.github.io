import React, { Component } from 'react';

import LDMSiteImage from '../images/LDM_site.gif';

class LDM extends Component {
    render() {
        return (
            <div class="work__box">
                <div class="work__text">
                    <h3>Larissa De Michael</h3>
                    <p>
                        Squarespace site for Larissa De Michael. I handled all design and implementation of the site for Larissa.
                    </p>
                    <ul class="work__list">
                        <li>Photoshop</li>
                        <li>Squarespace</li>
                    </ul>

                    <div class="work__links">
                        <a href="https://larissademichiel.com/" target="_blank" rel="noreferrer"  class="link__text">
                        Visit Site <span>&rarr;</span>
                        </a>
                        <a href="https://larissademichiel.com/" target="_blank" rel="noreferrer" >
                            <img src={LDMSiteImage} class="work__code" title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div class="work__image-box">
                    <img src={LDMSiteImage} class="work__image" alt="Project 1" />
                </div>
            </div>
        )
    }
}

export default LDM;