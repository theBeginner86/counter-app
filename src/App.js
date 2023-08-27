import React, { Component } from 'react';
import NavBar from './Component/navbar'
import Counters from './Component/counters';

class App extends Component {

  state = { 
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
  }

  handelIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({
          counters
      });
  }

  handelDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({
          counters
      });
  }

  handelReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c
      });
      this.setState({
          counters
      });
  }

    render(){
      return (
        <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c => c.value >= 1).length} />
            <main className="containers m-4">
            <Counters counters={ this.state.counters } onReset={ this.handelReset } onDelete={ this.handelDelete } onIncrement={ this.handelIncrement } />
            </main>
        </React.Fragment>
      );
    }
}

export default App;
