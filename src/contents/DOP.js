import React, { Component } from 'react';

import DOPSiteImage from '../images/dop_site_short.gif';

class DOP extends Component {
    render() {
        return(
            <div className="work__box">
                <div className="work__text">
                    <h3>Dentistry on Purpose</h3>
                    <p>
                        The main website for Dentistry on Purpose. This site is for informational purposes so potential clients can learn all about the services Dentistry on Purpose provides. This site is mostly HTML5 and JavaScript. There is some PHP sprinkled throughout to help make some forms work, as well as handle the login component.
                    </p>
                    <ul class="work__list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                    </ul>

                    <div className="work__links">
                        <a href="https://www.dentistryonpurpose.com" target="_blank" rel="noreferrer" className="link__text">
                            Visit Site <span>&rarr;</span>
                        </a>
                        <a href="https://www.dentistryonpurpose.com" title="View Source Code" target="_blank" rel="noreferrer" >
                            <img src={DOPSiteImage} className="work__code" alt="GitHub" />
                        </a>
                    </div>
                        
                </div>
                <div class="work__image-box">
                        <img src={DOPSiteImage} className="work__image" alt="Project 1" />
                </div>
            </div>
        )
    }
}

export default DOP;