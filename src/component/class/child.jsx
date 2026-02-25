import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div className="child-container">
        <h1>Hi, I am Child</h1>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.changeName("appu")}>
          name change
        </button>
      </div>
    );
  }
}

export default Child;
