import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0,
        // tags: [],
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags, check out later!!!</p>;

    //     return (
    //         <ul>
    //             { this.state.tags.map(tag => <li key={tag}>tag</li>) }
    //         </ul>
    //     );
    // }

    // constructor() {
    //     super();
    //     this.handelIncrement = this.handelIncrement.bind(this);
    // }

    handelIncrement = (product) => {
        console.log(product);
        // console.log('Button was clicked!!', this);
        this.setState( {count: this.state.count + 1} );
    }

    // doHandelIncrement = () => {
    //     this.handelIncrement({id: 1});
    // }

    render() {  
        return ( 
            <React.Fragment>
                <span className={ this.getBadgeClass() }>{this.formatCount()}</span>
                {/* <button onClick={ this.doHandelIncrement } className="btn btn-secondary btn-sm">Increment</button> */}
                <button onClick={ () => this.handelIncrement( {id: 1}) } className="btn btn-secondary btn-sm">Increment</button>
                {/* { this.state.tags.length === 0 && 'I m sorry no tags here!!' }
                { this.renderTags()  } */}

            </React.Fragment> 
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return (count === 0) ? "Zero" : count;
    }
}
 
export default Counter;
