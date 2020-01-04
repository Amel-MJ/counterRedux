import React, { Component } from "react";

export default class add extends Component {
  render() {
    return (
      <div className="task-input">
        <h1 className="title">TO-DO APP</h1>

        <input
          className="input-inner"
          placeholder="Enter new task"
          onChange={e => {
            this.props.newtodo(e.target.value);
          }}
          value={this.props.todo}
        />
        <button className="btn btn-primary">ADD</button>
      </div>
    );
  }
}
