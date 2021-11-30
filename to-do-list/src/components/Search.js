import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch() {
        let search = this.state.strSearch;
        this.props.onClickButtonSearch(search);;
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        });
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch} className="btn btn-info" type="button">Search</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;