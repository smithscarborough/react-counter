import React from "react";
import Display from "./Display";
import Increment from "./Increment";

import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: typeof props.initialCount !== "number" ? 42 : props.initialCount
    };
  }

  increment = (n) => {
    this.setState({
      count: this.state.count + n
    });
  };

  render() {
    let textClass = "";
    if (this.state.count > 0) {
      textClass = "green";
    } else if (this.state.count === 0) {
      textClass = "yellow";
    } else {
      textClass = "red";
    }

    return (
      <div className={"Counter " + textClass}>
        <Increment handleClick={this.increment} step={-50} />
        <Increment handleClick={this.increment} step={-10} />
        <Increment handleClick={this.increment} step={-1} />
        <Display count={this.state.count} />
        <Increment handleClick={this.increment} step={1} />
        <Increment handleClick={this.increment} step={10} />
        <Increment handleClick={this.increment} step={50} />
      </div>
    );
  }
}

export default Counter;
