import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="nav" role="navigation">
                <ul className="nav__items">
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                    {/* <li className="nav__item"><a href="#clients" className="nav__link">Clients</a></li> */}
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Blog</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;