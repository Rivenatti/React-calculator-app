import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        {/* Display */}
        <div className="calculator__display">12345</div>

        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--percentage">
            %
          </button>
          <button className="calculator__key calculator__key--square-root">
            &radic;
          </button>
          <button className="calculator__key calculator__key--square-root">
            x&sup2;
          </button>
          <button className="calculator__key calculator__key--square-root">
            1/x
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--square-root">
            CE
          </button>
          <button className="calculator__key calculator__key--square-root">
            C
          </button>
          <button className="calculator__key calculator__key--square-root">
            D
          </button>
          <button className="calculator__key calculator__key--square-root">
            &divide;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--square-root">
            7
          </button>
          <button className="calculator__key calculator__key--square-root">
            8
          </button>
          <button className="calculator__key calculator__key--square-root">
            9
          </button>
          <button className="calculator__key calculator__key--square-root">
            &times;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--square-root">
            4
          </button>
          <button className="calculator__key calculator__key--square-root">
            5
          </button>
          <button className="calculator__key calculator__key--square-root">
            6
          </button>
          <button className="calculator__key calculator__key--square-root">
            &minus;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--square-root">
            1
          </button>
          <button className="calculator__key calculator__key--square-root">
            2
          </button>
          <button className="calculator__key calculator__key--square-root">
            3
          </button>
          <button className="calculator__key calculator__key--square-root">
            &#x2b;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button className="calculator__key calculator__key--square-root">
            &plusmn;
          </button>
          <button className="calculator__key calculator__key--square-root">
            0
          </button>
          <button className="calculator__key calculator__key--square-root">
            .
          </button>
          <button className="calculator__key calculator__key--square-root">
            =
          </button>
        </div>
      </div>
      // END OF CALCULATOR CLASS
    );
  }
}

export default Calculator;
