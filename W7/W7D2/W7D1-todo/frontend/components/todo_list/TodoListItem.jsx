import React from 'react';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div>
        <li>{ this.props.todo.title }</li>
        <button onClick={()=> this.props.removeTodo(this.props.todo) }>Delete</button>
      </div>
    );
  }

}



export default TodoListItem;
