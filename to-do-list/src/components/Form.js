import React from "react";
const uuidv4 = require('uuid/v4');

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            task_name: '',
            task_level: 0
        };
    }
    
    handleCancel() {
        this.props.onClickCancel();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = {
            id: uuidv4(),
            name: this.state.task_name,
            level: +(this.state.task_level)
        };
        this.props.onSubmitAddTask(item);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-6 col-md-6">
                    <form className="form-inline add-task-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="sr-only">Name</label>
                            <input name="task_name" type="text" className="form-control" placeholder="Task Name" value={this.state.task_name}  onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only">Level</label>
                            <select name="task_level" id="inputDs" value={this.state.task_level} onChange={this.handleChange} className="form-control">
                                <option value='0' >Small</option>
                                <option value='1'>Medium</option>
                                <option value='2' >High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;