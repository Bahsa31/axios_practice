import React from 'react'; 
  
export default class Component_Cycle extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World!" }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "  React JS!" }); 
    } 
  
    render() 
    { 
        return ( 
            <div> 
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>              
            <h2 onClick={this.changeState.bind(this)}>Click Here!</h2> 
            </div>
            ); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 