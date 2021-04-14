import React, { Component } from 'react';
import { random, shuffle } from 'lodash';

import DirectionDie from './Dice/DirectionDie.js'
import FlipTrickDie from './Dice/FlipTrickDie.js'
import SpinDegreeDie from './Dice/SpinDegreeDie.js'
import StanceDie from './Dice/StanceDie.js'

import './App.css';

class App extends Component {
  state = {
    selectedSides: [0, 1, 1, 0],
    toggleRoll: false,
    allDice: [
      DirectionDie,
      FlipTrickDie,
      SpinDegreeDie,
      StanceDie
    ]
  }
  
  rollDice = () => {
    this.setState({ toggleRoll: !this.state.toggleRoll });
    
    setTimeout(() => {
        this.setState({
          selectedSides: [
            random(0, 5),
            random(0, 5),
            random(0, 5),
            random(0, 5)
          ],
          allDice: shuffle(this.state.allDice)
        });
      }, 499);
  }
  
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 className="title__sk8">SK8</h1>
          <h1 className="title__dice">DICE</h1>
        </div>
        
        <div className="dice">
          {this.state.allDice.map((TagName, index) => {
            return (
              <TagName
                key={index}
                selectedSideIndex={ this.state.selectedSides[index] }
                toggleRoll={ this.state.toggleRoll } />
            )
          })}
        </div>
        
        <div className="rolldice">
          <button
            type="button"
            name="button"
            onClick={ this.rollDice }
            className="rolldice__button">ROLL 'EM</button>
        </div>
      </div>
    );
  }
}

export default App;
