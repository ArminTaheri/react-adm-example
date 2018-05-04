import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: props.initialTodos };
    // We want to use component methods as event handlers so we bind the component itself as context.
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.readInputText = this.readInputText.bind(this);
  }
  addTodo() {
    this.setState({
      text: "",
      todos: this.state.todos.concat([this.state.text])
    });
  }
  deleteTodo(item) {
    this.setState({
      todos: this.state.todos.filter(todo => todo !== item)
    });
  }
  readInputText(text) {
    this.setState({ text });
  }
  render() {
    const makeTodoElements = (item, i) => {
      const deleter = (
        <button onClick={() => this.deleteTodo(item)}>delete</button>
      );
      return (
        <li key={i}>
          {item} -- {deleter}
        </li>
      );
    };
    return (
      <div>
        <ul>{this.state.todos.map(makeTodoElements)}</ul>
        <input onChange={e => this.readInputText(e.target.value)} />
        <button onClick={this.addTodo}>submit</button>
      </div>
    );
  }
}

export default TodoList;
