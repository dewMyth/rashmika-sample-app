import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  state = {
    todo :[ 
    {
      id : 1,
      title :"September",
      completed :false
    },
    {
      id : 2,
      title :"Octomber",
      completed :true
    },
    {
      id : 3,
      title :"December",
      completed :false
    } 
  ]
  }
  
  markComplete =(id) => {
    console.log(id)
}

  render() {
    return (
      <div className="App">
        
        <Todo todo= {this.state.todo} markComplete={this.markComplete} />
        
      </div>
    );
  }

}


  
  

 


export default App;
