import React, {Component} from 'react';


class TodoItem extends Component {
  render(){
      // .map will loop thru each item in the array, so 3 times
    return this.props.todo.map((todo)=>(
        //then .map will spit out whatever you want it to,
        //so we want it to spit out the title of each array
        <h3>hi</h3>
    ));
  }
}

export default TodoItem;