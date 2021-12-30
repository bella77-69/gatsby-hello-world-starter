import React from "react"
import { Link } from "gatsby"

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return <div style={{ color: 'blue' }}>
            <h1 style={{ margin: '1rem'}}>Counter</h1>
            <p style={{ margin: '1rem'}}>current counter: {this.state.count}</p>
        
            <button onClick={() => this.setState({ count: this.state.count + 10 })} style={{ color: 'tomato', margin: '1rem' }}>PLUS</button>
           
            <button onClick={() => this.setState({ count: this.state.count - 10 })} style={{ color: 'tomato' }}>MINUS</button>
            <br></br>
            <br></br>
            <br></br>
        
            <Link to="/">Back</Link>
        </div>
    }
}

