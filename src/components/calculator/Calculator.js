import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        {/* Display */}
        <div className="calculator__display">12345</div>

        {/* Functional keys row */}
        <div className="calculator__function__keys--row first">
          <button className="calculator__key calculator__key--percentage">
            %
          </button>
          <button className="calculator__key calculator__key--square-root">
            &radic;
          </button>
          <button className="calculator__key calculator__key--power">
            x&sup2;
          </button>
          <button className="calculator__key calculator__key--one-division">
            1/x
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--clear">C</button>

          <button className="calculator__key calculator__key--delete">D</button>
          <button className="calculator__key calculator__key--divide">
            &divide;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--seven">7</button>
          <button className="calculator__key calculator__key--eight">8</button>
          <button className="calculator__key calculator__key--nine">9</button>
          <button className="calculator__key calculator__key--times">
            &times;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--four">4</button>
          <button className="calculator__key calculator__key--five">5</button>
          <button className="calculator__key calculator__key--six">6</button>
          <button className="calculator__key calculator__key--minus">
            &minus;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--one">1</button>
          <button className="calculator__key calculator__key--two">2</button>
          <button className="calculator__key calculator__key--three">3</button>
          <button className="calculator__key calculator__key--plus">
            &#x2b;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--plusminus">
            &plusmn;
          </button>
          <button className="calculator__key calculator__key--zero">0</button>
          <button className="calculator__key calculator__key--point">.</button>
          <button className="calculator__key calculator__key--equal">=</button>
        </div>
      </div>
      // END OF CALCULATOR CLASS
    );
  }
}

export default Calculator;
