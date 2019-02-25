import React from 'react';
import './Components.css';
import axios from 'axios';

export default class CommentsList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
      <h2 style={{textAlign:'left'}}>Commented User's email ids</h2>  
      <ol>
        { this.state.persons.map(person => <li key={person.id}>{person.email}</li>)}
      </ol>
      </div>
    )
  }
}