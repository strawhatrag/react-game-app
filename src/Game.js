import React, { Component } from "react";

class Game extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    //this is called out of context
    // so bind it to the class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const randNum = Math.floor(Math.random() * 10);
    this.setState({ num: randNum });
    console.log("state changed");
  }

  render() {
    const el =
      this.state.num !== 7 ? (
        <button onClick={this.handleClick}>Random number</button>
      ) : (
        <p>You Win!</p>
      );
    return (
      <div>
        {/* // use it */}
        <h1>Number is {this.state.num}</h1>
        {el}
      </div>
    );
  }
}

export default Game;
