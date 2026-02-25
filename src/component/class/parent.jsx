import React from "react";
import Child from "./child";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "pranesh",
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName(newName) {
    this.setState({
      name: newName,
    });
  }
  render() {
    return (
      <div className="parent-container">
        <h1> Hi, I am Parent</h1>
        <div>
          <Child name={this.state.name} changeName={this.changeName} />
        </div>
      </div>
    );
  }
}

export default Parent;
