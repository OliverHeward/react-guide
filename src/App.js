import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Oliver", age: 28 },
      { name: "Scott", age: 25 },
      { name: "Stephanie", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Miz", age: 25 },
        { name: "Steph", age: 23 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Oliver!', age: 28},
        {name: event.target.value, age: 25},
        {name: "Steph", age: 23}
      ]
    })
  }

  togglePersonsHandler = () => {

  }

  render() {

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          onClick={this.togglePersonsHandler}
          >Switch Name</button>
        {this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Ollie!!')}
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null }
      </div>
    );
  }
}

export default App;
