import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        // console.log("props", this.props);
        return ( 
            <React.Fragment>
                <div>
                    <span className={ this.getBadgeClass() }>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            </React.Fragment>
         );
    }

    getBadgeClass(){
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const count = this.props.counter.value;
        return (count === 0) ? "Zero" : count;
    }
}
 
export default Counter;