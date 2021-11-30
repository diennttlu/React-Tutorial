import React from "react";

class Sort extends React.Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="/#" role="button">Name ASC</a></li>
                        <li><a href="/#" role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a href="/#" role="button">Level ASC</a></li>
                        <li><a href="/#" role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success lb-select-sort">
                        NAME - DESC
                    </span>
                </div>
            </div>
        );
    }
}

export default Sort;