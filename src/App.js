import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 'asdqw', name: "Oliver", age: 28 },
      { id: 'gqeqw', name: "Scott", age: 25 },
      { id: 'vasdq', name: "Stephanie", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  inputChangedHandler = (event) => {    
    this.setState({
      userInput: event.target.value 
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render() {
    let persons = null;
    const charList = this.state.userInput.split('').map((ch, index )=> {
      return <Char 
          character={ch} 
          key={index}
          clicked={() => this.deleteCharHandler(index)}/>;
    });

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
          {persons}
      </div>
    );
  }
}

export default App;
