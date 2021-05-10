import React, { Component} from 'react';

import Hello from '../components/Hello';

class Intro extends Component {
    render() {
        return(
            <div>
                <Hello name="Nate" />

                <h3>I'm a Husband, Father, and Web Developer!</h3>
            </div>
        )
    }
}

export default Intro;