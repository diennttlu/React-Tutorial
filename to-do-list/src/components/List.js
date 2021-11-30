import React from "react";
import Item from "./Item";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };    
    }

    render() {
        const items = this.props.items;
        const elementItems = items.map((item, index) => {
            return <Item key={index} item={item} index={index} />
        });
        return (
            <div className="row">
                <div className="task-list col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">List Task</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task</th>
                                        <th>Level</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elementItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;