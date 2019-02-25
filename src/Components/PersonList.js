import React from 'react';
import './Components.css';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
       <div> 
        <h2 style={{textAlign:'left'}}>List of Users</h2>   
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
      </div>
    )
  }
}