import React, { Component } from 'react';

class K9 extends Component {
    render() {
        return (
            <div className="work__box">
                <div className="work__text">
                    <h3>K9 Rubber Tracks</h3>
                    <p>
                        eCommerce site for K9 Construction to sell rubber tracks, sprockets, rollers, and idlers for tractors, targetsed at the spanish speaking community. This site utlizes a few different API's to connect to paypal for payment processing, as well as connecting to a sales tax calculator to ensure proper sales tax is being calculated, collected, and reported to the correct state authorities. I hadled every detail from inception to launch. Design, code, testing, launch, analytics, and maintenance. 
                    </p>
                    <ul class="work__list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>

                    <div className="work__links">
                        <a href="https://www.dummydomain.us" target="_blank" rel="noreferrer"  className="link__text">
                            Visit Site <span>&rarr;</span>
                        </a>
                        {/* <a href="https://www.dummydomain.us" title="View Source Code" target="_blank">
                            <img src={DOPSiteImage} className="work__code" alt="GitHub" />
                        </a> */}
                    </div>
                        
                </div>
                {/* <div class="work__image-box">
                        <img src={DOPSiteImage} className="work__image" alt="Project 1" />
                </div> */}
            </div>
        )
    }
}

export default K9;