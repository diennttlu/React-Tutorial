
import React from 'react';
import './App.css';
import Course from './components/Course';

function App() {
    return (
        <div className="row">
            <Course />
            <Course />
            <Course />
        </div>
        // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This is the first react application"))
    );
}

export default App;
