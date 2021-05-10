import React, { Component } from 'react';

import aboutPhoto from '../images/syed-ali-hussnain.jpg';

class About extends Component {
    render() {
        return(
            <div>
                <section className="about" id="about">
                    <div className="row">
                        <h2>About Me</h2>
                        <div className="about__content">
                            <div className="about__text">
                
                                <p>
                                    Hey, I’m Nate Guy! I have lived in some beautiful places around the world, but now reside in beautiful Birmingham, AL. I am focused on iOS &amp; web development, UI/UX design &amp; development, Alexa Skill development, and web design.
                                </p> 
                
                                <p>
                                    I have built great apps at Ingage (formally ScrollMotion) for the likes of Apple, Oprah Magazine, Esquire Magazine, GE, Campbell’s Soup, Harvard Business Review, Sesame Street, the NFL and some of the largest Bio Tech companies in the US.
                                </p> 
                
                                <p>
                                    I have also built some Augmented Reality experiences with Blippar, for Paul Frank, MLS, Nickelodeon, and Kohl’s. I am also a gamer who streams games and live coding on Twitch.
                                </p>
                
                                {/* <a href="#" className="btn">My Resume</a> */}
                            </div>

                            <div className="about__photo-container">
                                <img className="about__photo" src={aboutPhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;