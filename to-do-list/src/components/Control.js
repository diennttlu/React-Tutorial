import React from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onClickAdd();
    }

    render() {
        let elementButton =  <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
        if (this.props.isShowForm) {
            elementButton = <button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">Close Form</button>;
        }
        return (
            <div className="row">
                <Search onClickButtonSearch={this.props.onClickSearch}/>
                <Sort />
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {elementButton}
                </div>
            </div>
        );
    }
}

export default Control;