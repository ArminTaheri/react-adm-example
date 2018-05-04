import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Editor from "./components/Editor";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todolist">TodoList</Link>
              </li>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/" component={() => null} />
              <Route
                path="/todolist"
                component={() => <TodoList initialTodos={[]} />}
              />
              <Route path="/editor" component={Editor} />
              <Route path="/form" component={Form} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
