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
    console.log(e.target.textContent);
    const userInput = e.target.textContent;
    this.setState((prevState) => {
      return { input: [...prevState.input, userInput] };
    });
  }
  render() {
    return (
      <div id="wrapper">
        <div className="display-container">
          <div className="display">0</div>
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

// const App = ({ buttonArray }) => {
//   const handleClick = (e) => {
//     console.log(e.target.textContent);
//   };

//   return (
//     <div id="wrapper">
//       <div className="display-container"></div>
//       <div className="buttons-container">
//         <Keypad buttonsList={buttonArray} handleClick={handleClick} />
//       </div>
//     </div>
//   );
// };

export default App;
