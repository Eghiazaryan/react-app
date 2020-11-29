import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super()
        this.increasehandleClick = this.increasehandleClick.bind(this)
        this.decreasehandleClick = this.decreasehandleClick.bind(this)
    }

    state = {
        count: 0,
       
    }
    
    increasehandleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decreasehandleClick() {
        if(this.state.count>0)
        this.setState({
            count: this.state.count - 1
        });
    }

    resetCounter = () =>{
       this.setState({
        count:0
       }
       )
    }

    
    render() {
        return (

            <div>

            <p className = 'p-tag' > { this.state.count } </p>

            
            <button className = 'inc'onClick = { this.increasehandleClick } > + </button> 


            
            <button className = 'dec'onClick = { this.decreasehandleClick } > - </button>

            <button className = 'res'onClick = { this.resetCounter } > Rezet </button>

            
            </div>
        );
    }
}

export default Counter;