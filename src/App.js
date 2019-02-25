import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import CommentsList from './Components/CommentsList';
import ComponentCycle from './Components/ComponentCycle';

class App extends Component {
  render() {
    return (
      <div className="App">
       <PersonList/>
       <br></br>
       <PersonInput/>
       <br></br>
       <CommentsList/>
       <br></br>
       <ComponentCycle />
       </div>
    );
  }
}

export default App;
