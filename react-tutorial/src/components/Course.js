import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowOutline: true };
        this.handleDangerClick = this.handleDangerClick.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleToggleOutline = this.handleToggleOutline.bind(this);
    }

    handlePrimaryClick() {
        alert("primary click");
    }

    handleSuccessClick(content) {
        alert(content);
    }

    handleDangerClick() {
        alert(this.props.name);
    }

    handleRegister() {
        alert(this.refs['username'].value);
    }

    handleToggleOutline() {
        this.setState({ 
            isShowOutline: !this.state.isShowOutline 
        });

    }

    showButtonFree() {
        const isFree = this.props.free;
        if (isFree) {
            return (
                <div className="btn-group">
                    <button onClick={this.handlePrimaryClick} type="button" className="btn btn-primary">Primary</button>
                    <button onClick={() => this.handleSuccessClick('success click')} type="button" className="btn btn-success">Success</button>
                    <button onClick={this.handleDangerClick} type="button" className="btn btn-danger">Danger</button>
                </div>
            );
        }
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." ref="username"></input>
                <span className="input-group-btn">
                    <button onClick={this.handleRegister} className="btn btn-info" type="button">Register</button>
                </span>
            </div>
        );
    }

    render() {
        let elmOutline = null;
        if (this.state.isShowOutline) {
            elmOutline = <ul className="list-group">
                            <Lesson />
                            <Lesson />
                            <Lesson />
                        </ul>
        }
        return (
            <div className="col-md-4">
                <div className="card border-primary">
                    <div className="card-header">
                        <h4 className="card-title">{this.props.name}</h4>
                    </div>
                    <div className="card-body">
                        <p>{this.props.time}</p>
                        <button onClick={this.handleToggleOutline} className="btn btn-info" type="button">Toggle Outline</button>
                        {elmOutline}
                    </div>
                    <div className="card-footer">
                        {this.showButtonFree()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;