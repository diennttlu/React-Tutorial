import React, { Component } from 'react';
import Greeting from './Greeting';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick} className="btn btn-danger">Logout</button>
        } else {
            button = <button onClick={this.handleLoginClick} className="btn btn-primary">Login</button>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default LoginControl;
