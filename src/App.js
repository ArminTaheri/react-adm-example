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
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/todolist`}>TodoList</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/editor`}>Editor</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/form`}>Form</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={() => null}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/todolist`}
                component={() => <TodoList initialTodos={[]} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/editor`}
                component={Editor}
              />
              <Route path={`${process.env.PUBLIC_URL}/form`} component={Form} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
