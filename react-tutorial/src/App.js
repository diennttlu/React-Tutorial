
import React from 'react';
import './App.css';
import Course from './components/Course';


function App() {
    const items = [
        {
            name: 'ReactJS',
            time: '30h',
            free: true,
            decs: 'React JS is very simple'
        },
        {
            name: 'Angular 4x',
            time: '55h',
            free: false,
            decs: ''
        },
        {
            name: 'NodeJS',
            time: '35h',
            free: true,
            decs: ''
        }
    ];

    const elementCourses = items.map((item, index) => 
        <Course key={index} name={item.name} time={item.time} free={item.free}>{item.decs}</Course>
    );

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                   {elementCourses}
                </div>
            </div>
        </div>
        // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This is the first react application"))
    );
}

export default App;
