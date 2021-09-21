import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-md-4">
				<div className="card border-primary">
					<div className="card-header">
                        <h4 className="card-title">Course Component</h4>
					</div>
					<div className="card-body">
						<ul className="list-group">
							<Lesson />
							<Lesson />
							<Lesson />
						</ul>
					</div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
				</div>
			</div>
         );
    }
}
 
export default Course;