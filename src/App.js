import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

//class App extends Component{ //Was simply function App() { with no render(){ below it

class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'take trash',
        completed: false
      },
      {
        id: 2,
        title: 'dinner',
        completed: true
      },
      {
        id: 3,
        title: 'meeting',
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    console.log(id)
  }

  render(){
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
