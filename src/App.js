import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      {name:"suresh", age: 30, belt: "black", id: 1},
      {name:"sanju", age: 20, belt: "black", id: 2},
      {name:"sruthi", age: 10, belt: "blue", id: 3},
      {name:"sridevi", age: 25, belt: "red", id: 4},
    ]
  }

  // function to add ninja from form
  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id=Math.random();
    let ninjas = [...this.state.ninjas,ninja];

    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    console.log('invokced delete', id);
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.id !== id
      })
      
      this.setState({
        ninjas: ninjas
      })
  }

  render() {
      return (
      <div className="App">
        <h1> My first React App</h1>
        <p> Welcome! </p> 
        <Ninjas delNinja = {this.deleteNinja} ninjas = {this.state.ninjas} />
        
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );    
  }   
}

export default App;
