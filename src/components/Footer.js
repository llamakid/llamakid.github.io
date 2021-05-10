import React, { Component } from 'react';

import gitHubPic from '../images/github.svg';
import linkedInPic from '../images/linkedin.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer" role="contentinfo">
                <div className="row">
                    <ul className="footer__social-links">
                        <li className="footer__social-link-item">
                            <a href="https://github.com/llamakid" title="Link to Github Profile">
                                <img src={gitHubPic} className="footer__social-image" alt="Github" />
                            </a>
                        </li>
                        <li className="footer__social-link-item">
                            <a href="https://www.linkedin.com/in/nathanguy/" title="Link to Linkedin Profile">
                                <img src={linkedInPic} className="footer__social-image" alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;