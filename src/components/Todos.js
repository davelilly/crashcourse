import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

//class App extends Component{ //Was simply function App() { with no render(){ below it

class Todos extends Component {
  
  // markComplete = () => {
  //   console.log("hey")
  // }
  
  render(){
    // .map will loop thru each item in the array, so 3 times
    return this.props.todos.map((todo) => (
        //then .map will spit out whatever you want it to,
        //so we want it to spit out the title of each array
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

//this is defining the name of the class Todos as an array
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;