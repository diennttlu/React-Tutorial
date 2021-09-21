import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.clickHandler}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

}

export default Toggle;