import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [results, setResult] = useState("");
  const [error, setErrorMsg] = useState("");

  const validateInputs = () => {
        // Check if the input fields are not empty 
    if (num1 === "") {
      setResult("");
      setErrorMsg("Num 1 cannot be empty");
      return false;
    }
    if (num2 === "") {
      setResult("");
      setErrorMsg("Num 2 cannot be empty");
      return false;
    }
        // Check if input fields not contain valid numbers
    const regex = /^-?\d*\.?\d+$/;
    if (!regex.test(num1) || !regex.test(num2)) {
      setResult("");
      setErrorMsg("Enter valid numbers.");
      return false;
    }
    
    return true;
  }
  const setOperation = (operator) => {
    if (validateInputs()) {
      const num1Val = parseFloat(num1);
      const num2Val = parseFloat(num2);
      let resultVal = "";
       // Perform arithmetic operation
      switch (operator) {
        case "+":
          resultVal = num1Val + num2Val;
          break;
        case "-":
          resultVal = num1Val - num2Val;
          break;
        case "*":
          resultVal = num1Val * num2Val;
          break;
        case "/":
          resultVal = num1Val / num2Val;
          break;
        default:
          break;
      }
      setErrorMsg("");
      setResult(resultVal);
    }
  }

  return (
        <div className ="container">
          <div className='box'>
          <h2>React Calculator</h2>
          <form onSubmit={(e)=>  {
              e.preventDefault() 
          }   
          }>
            <input type ="text" placeholder='Num 1' value={num1} onChange={(e) => setNum1(e.target.value)}></input><br></br>
            <input type ="text" placeholder='Num 2' value={num2} onChange={(e) => setNum2(e.target.value)} ></input>
            <div className ="keypad">
            <button onClick={() => setOperation("+")}>+</button>
            <button onClick={() => setOperation("-")}>-</button>
            <button onClick={() => setOperation("*")}>*</button>
            <button onClick={() => setOperation("/")}>/</button>
            </div>
            <div className = "result">
              {error && <div style={{color: "red"}}>{error}</div>}
              {results && <div style={{color: "green"}}>Result = {results} <br></br>Success : Your result is shown above!</div>}
            </div>
          </form>
        </div>
      </div>
  );
}

export default Calculator;