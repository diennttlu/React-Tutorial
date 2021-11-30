import React from "react";

class Item extends React.Component {
    render() {
        const { item } = this.props;
        const { index } = this.props;
        
        return (
            <tr>
                <td width="150px">{index}</td>
                <td width="500px">{item.name}</td>
                <td width="200pxpx">{this.setElementLevel(item.level)}</td>
                <td width="200px">
                    <button className="btn btn-default">Edit</button>
                    <button className="btn btn-default">Delete</button>
                </td>
            </tr>
        );
    }

    setElementLevel(level) {
        switch (level) {
            case 1:
                return <span className="label label-info">Medium</span>;
            case 2:
                return <span className="label label-danger">High</span>;
            default:
                return <span className="label label-default">Small</span>;
        }

    }
}

export default Item;