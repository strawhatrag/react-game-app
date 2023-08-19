import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false,
      dice1: "one",
      dice2: "one",
    };
    //this is called out of context
    // so bind it to the class
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleRoll(event) {
    let diceHeads = ["one", "two", "three", "four", "five", "six"];

    let rand1 = diceHeads[Math.floor(Math.random() * diceHeads.length)];
    let rand2 = diceHeads[Math.floor(Math.random() * diceHeads.length)];

    this.setState({ dice1: rand1, dice2: rand2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1200);
  }

  render() {
    let { dice1, dice2 } = this.state;
    let shake = this.state.isRolling ? "shaking" : "";
    return (
      <div className="icon">
        <div>
          <i className={`fas  ${shake} fa-dice-${dice1}`}></i>
          <i className={`fas ${shake} fa-dice-${dice2}`}></i>
        </div>

        <button
          className="roll-btn"
          onClick={this.handleRoll}
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default Game;
