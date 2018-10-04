import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  //----- State
  state = {
    displayed: "0",
    waitingForOperand: false,
    operator: null,
    actualValue: null
  };

  //----- Numeric input
  inputValue(input) {
    const { displayed, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayed: String(input),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayed: displayed === "0" ? String(input) : displayed + input
      });
    }
  }

  // Percentage input
  inputPercentage() {
    const { displayed } = this.state;
    let percent =
      parseFloat(displayed) >= 1
        ? String(parseFloat(displayed / 100).toFixed(2))
        : String(parseFloat(displayed / 100).toFixed(3));

    this.setState({
      displayed: displayed === "0" || displayed === "0." ? displayed : percent
    });
  }

  // Square root input
  inputSquareRoot() {
    const { displayed } = this.state;
    let sqrtCheck = () => {
      let squareRoot = Math.sqrt(parseFloat(displayed));
      if (displayed >= 0) {
        if (String(squareRoot).indexOf(".") === -1) {
          return String(squareRoot.toFixed(0));
        } else {
          return String(squareRoot.toFixed(5));
        }
      } else {
        return "ERROR";
      }
    };

    this.setState({
      displayed: sqrtCheck()
    });
  }

  //----- Power input
  inputPow() {
    const { displayed } = this.state;

    let pow = parseFloat(Math.pow(displayed, 2));
    let powCheck = () => {
      if (String(pow).indexOf(".") === -1) {
        return String(pow);
      } else {
        return String(pow).split("").length > 5 ? pow.toFixed(4) : String(pow);
      }
    };

    this.setState({
      displayed: powCheck()
    });
  }

  // Divide one by x input
  inputDivideOneByX() {
    const { displayed } = this.state;
    let x = parseFloat(1 / displayed);
    let xCheck = () => {
      if (String(x).indexOf(".") === -1) {
        return String(x);
      } else {
        return String(x).split("").length > 5 ? x.toFixed(4) : String(x);
      }
    };

    this.setState({
      displayed: displayed === "0" ? "ERROR" : xCheck()
    });
  }

  //----- Delete last input value
  delete() {
    const { displayed } = this.state;

    this.setState({
      displayed:
        displayed.length === 1 ? "0" : displayed.substr(0, displayed.length - 1)
    });
  }

  //----- Clear button
  clearAll() {
    this.setState({
      displayed: "0",
      waitingForOperand: false,
      operator: null,
      actualValue: null
    });
  }

  //----- Decimal button
  inputDecimal() {
    const { displayed, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayed: "0.",
        waitingForOperand: false
      });
    } else if (displayed.indexOf(".") === -1) {
      this.setState({
        displayed: String(displayed + ".")
      });
    }
  }

  //----- Change sign button
  changeSign() {
    const { displayed } = this.state;

    this.setState({
      displayed:
        displayed === "0" || displayed === "0."
          ? displayed
          : displayed.charAt(0) === "-"
            ? displayed.substr(1)
            : "-" + displayed
    });
  }

  // Math operations
  mathOperation(nextOperator) {
    const { displayed, operator, actualValue } = this.state;
    const nextValue = parseFloat(displayed);
    const operations = {
      "+": (previousValue, nextValue) => previousValue + nextValue,
      "-": (previousValue, nextValue) => previousValue - nextValue,
      "*": (previousValue, nextValue) => previousValue * nextValue,
      "/": (previousValue, nextValue) =>
        nextValue === 0 ? "ERROR" : previousValue / nextValue,
      "=": nextValue => nextValue
    };

    if (actualValue === null) {
      this.setState({
        actualValue: nextValue
      });
    } else if (operator) {
      const currentValue = actualValue || 0;
      const result = operations[operator](currentValue, nextValue);
      this.setState({
        actualValue: result,
        displayed: String(result)
      });
    }
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  }

  checkDisplay = () => {
    if (this.state.displayed === "ERROR" || this.state.displayed === "NaN") {
      return "ERROR";
    } else if (this.state.displayed.length > 15) {
      return "OUT OF RANGE";
    } else {
      return this.state.displayed;
    }
  };

  render() {
    return (
      <div className="calculator">
        {/* Display */}
        <div className="calculator__display">{this.checkDisplay()}</div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row first">
          <button
            onClick={() => this.inputPercentage()}
            className="calculator__key calculator__key--percentage"
          >
            %
          </button>
          <button
            onClick={() => this.inputSquareRoot()}
            className="calculator__key calculator__key--square-root"
          >
            &radic;
          </button>
          <button
            onClick={() => this.inputPow()}
            className="calculator__key calculator__key--power"
          >
            x&sup2;
          </button>
          <button
            onClick={() => this.inputDivideOneByX()}
            className="calculator__key calculator__key--one-division"
          >
            1/x
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button
            onClick={() => this.clearAll()}
            className="calculator__key calculator__key--clear"
          >
            C
          </button>

          <button
            onClick={() => this.delete()}
            className="calculator__key calculator__key--delete"
          >
            D
          </button>
          <button
            onClick={() => this.mathOperation("/")}
            className="calculator__key calculator__key--divide"
          >
            &divide;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button
            onClick={() => this.inputValue(7)}
            className="calculator__key calculator__key--seven"
          >
            7
          </button>
          <button
            onClick={() => this.inputValue(8)}
            className="calculator__key calculator__key--eight"
          >
            8
          </button>
          <button
            onClick={() => this.inputValue(9)}
            className="calculator__key calculator__key--nine"
          >
            9
          </button>
          <button
            onClick={() => this.mathOperation("*")}
            className="calculator__key calculator__key--times"
          >
            &times;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button
            onClick={() => this.inputValue(4)}
            className="calculator__key calculator__key--four"
          >
            4
          </button>
          <button
            onClick={() => this.inputValue(5)}
            className="calculator__key calculator__key--five"
          >
            5
          </button>
          <button
            onClick={() => this.inputValue(6)}
            className="calculator__key calculator__key--six"
          >
            6
          </button>
          <button
            onClick={() => this.mathOperation("-")}
            className="calculator__key calculator__key--minus"
          >
            &minus;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button
            onClick={() => this.inputValue(1)}
            className="calculator__key calculator__key--one"
          >
            1
          </button>
          <button
            onClick={() => this.inputValue(2)}
            className="calculator__key calculator__key--two"
          >
            2
          </button>
          <button
            onClick={() => this.inputValue(3)}
            className="calculator__key calculator__key--three"
          >
            3
          </button>
          <button
            onClick={() => this.mathOperation("+")}
            className="calculator__key calculator__key--plus"
          >
            &#x2b;
          </button>
        </div>
        {/* Functional keys row */}
        <div className="calculator__function__keys--row">
          <button
            onClick={() => this.changeSign()}
            className="calculator__key calculator__key--plusminus"
          >
            &plusmn;
          </button>
          <button
            onClick={() => this.inputValue(0)}
            className="calculator__key calculator__key--zero"
          >
            0
          </button>
          <button
            onClick={() => this.inputDecimal()}
            className="calculator__key calculator__key--point"
          >
            .
          </button>
          <button
            onClick={() => this.mathOperation("=")}
            className="calculator__key calculator__key--equal"
          >
            =
          </button>
        </div>
      </div>
      // END OF CALCULATOR CLASS
    );
  }
}

export default Calculator;
