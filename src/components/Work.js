import React, { Component } from 'react';
import K9 from '../contents/K9';
import DOP from '../contents/DOP';
import LDM from '../contents/LDM';
import GEGSIApp from '../contents/GEGSIApp';
import Mercer from '../contents/Mercer';

class Work extends Component {
    render() {
        return (
            <div>
                <section class="work" id="work">
                    <div class="row">
                        <h2>My Work</h2>
                        <div class="work__boxes">
                            <K9 />
                            <DOP />
                            <LDM />
                            <GEGSIApp />
                            <Mercer />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Work;