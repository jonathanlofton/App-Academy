import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({id: this.uniqueId()});
    const todo = Object.assign({}, this.state);

    this.props.receiveTodo(todo);
  }

  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Title:</h3>
        <input onChange={this.update('title')}></input>
        <h3>Body:</h3>
        <input onChange={this.update('body')}></input>
        <button>Submit</button>
      </form>

    );
  }
}

export default TodoForm;
