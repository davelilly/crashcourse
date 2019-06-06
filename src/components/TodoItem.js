import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = ()=> {
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // }else{
    //   return {
    //     textDecoration: 'none'
    //   }
    // } OR
    return {
      backgroundColor: this.props.todo.completed ? 
      'red' : '#efefef',
      padding: '10px',
      borderTop: '1px solid #000',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }
  // Instead of
  // markComplete(e) {
  //   console.log(this.props)
  // } and .bind(this) below
  // Use
  // markComplete = (e) => {
  //   console.log(this.props)
  // }


  render(){
      // .map will loop thru each item in the array, so 3 times
    
    const { id, title} = this.props.todo;  
    return (
        //then .map will spit out whatever you want it to,
        //so we want it to spit out the title of each array
        <div style={this.getStyle()}> 
          <h3>
            <input type='checkbox' name='' id='' onChange={this.props.markComplete.bind(this, id)}></input>
            {title}
          </h3>
        </div>
    );
  }
}

//this is defining the name of the class TodoItem as an object
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#efefef'
// }


export default TodoItem;