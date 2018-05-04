import React, { Component } from "react";
import ReactQuill from "react-quill";
import { html } from "js-beautify";
import "react-quill/dist/quill.snow.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { markup: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ markup: value });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "left",
          justifyContent: "space-around",
          flexDirection: "row"
        }}
      >
        <ReactQuill
          style={{ height: "500px" }}
          theme="snow"
          value={this.state.markup}
          onChange={this.handleChange}
        />
        <div>
          <pre>
            <code>{html(this.state.markup)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Editor;
