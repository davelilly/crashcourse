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
        title: 'tdinner',
        completed: false
      },
      {
        id: 3,
        title: 'meeting',
        completed: false
      }
    ]
  }
  
  render(){
  return (
    <div className="App">
      <h1>App2s</h1>
      <Todos todo={this.state.todos}/>
    </div>
  );
}
}

export default App;
