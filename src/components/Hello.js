import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello I'm {this.props.name}!</h1>
            </div>
        )
    }
}

export default Hello;