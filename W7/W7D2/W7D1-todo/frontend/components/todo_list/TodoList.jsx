import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
  const { todos } = this.props;
  const content = todos.map (todo => (
    <TodoListItem
      key={todo.id}
      todo={ todo }
      removeTodo={this.props.removeTodo} />
  ));


  return (
    <div>
      <ul>
        { content }
      </ul>
      <TodoForm receiveTodo={this.props.receiveTodo}/>
    </div>
    );
  }
}

export default TodoList;
