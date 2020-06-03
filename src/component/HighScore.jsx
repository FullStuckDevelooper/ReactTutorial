import React, { Component } from "react";
class HighScore extends Component {
  state = {};
  render() {
    if (this.props.overTen) {
      return (
        <div>
          <h1> Grats U win </h1>
          <button onClick={this.props.onReset}>Reset </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HighScore;
