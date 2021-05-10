import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header" role="banner" id="top">
                    <div className="row">
                        <Nav />
                    </div>
                    <div className="header__text-box row">
                        <div className="header__text">
                            <h1 className="heading-primary">
                                <span>Nate Guy</span>
                            </h1>
                            <p>Hi there! I'm Nate Guy. Husband, Father, Developer, and Creator of Things by day; LlamaKid by night. </p>
                            <a href="#contact" className="btn btn--pink">Get in touch</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;