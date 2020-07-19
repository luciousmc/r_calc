import React from "react";
import Keypad from "./keypad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const userInput = e.target.textContent;
    this.setState((prevState) => {
      return { input: [...prevState.input, userInput] };
    });
  }
  render() {
    return (
      <div id="wrapper">
        <div className="display-container">
          <div className="display">
            {this.state.input.length === 0 ? 0 : this.state.input}
          </div>
        </div>
        <div className="buttons-container">
          <Keypad
            buttonsList={this.props.buttonArray}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
