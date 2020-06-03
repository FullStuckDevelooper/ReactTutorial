import React, { Component } from "react";
import HighScore from "./HighScore";
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overten: false,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = (e) => {
    this.setState({ count: 0, overten: false });
  };

  componentDidUpdate(props, state) {
    if (this.state.count > 10 && !this.state.overten) {
      this.setState({ overten: true });
      console.log("haha");
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>print {count}</h1>
        <HighScore overTen={this.state.overten} onReset={this.resetCount} />
        <span>
          <button onClick={() => this.handleClick()}>click me </button>
        </span>
      </div>
    );
  }
}

export default Hello;
