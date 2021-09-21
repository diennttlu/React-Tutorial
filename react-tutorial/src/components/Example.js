import React, { useState, Component } from "react"

const Example = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

// class base
// class Example extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
//             </div>
//         );
//     }
// }

export default Example