import React, {Component} from 'react';
import TodoItem from './TodoItem';

//class App extends Component{ //Was simply function App() { with no render(){ below it

class Todos extends Component {
  render(){
    // .map will loop thru each item in the array, so 3 times
    return this.props.todo.map((todo)=>(
        //then .map will spit out whatever you want it to,
        //so we want it to spit out the title of each array
        <TodoItem todo={todo}/>
    ));
}
}

export default Todos;