import React, {useState} from "react";
import './App.css';


function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(""); 
  const [result, setResult] = useState(null);

  function displayResult(){
    // ERROR of 'badState' was because the displayResult func included parenthesis
    var resultDisplay = 0;

    if (input.includes("+")){
      input.split("+").map((element) => resultDisplay += parseFloat(element));
      setResult(resultDisplay)
    } 
    else if (input.includes("-")){
      var test = input.split("-");
      var result = parseFloat(test[0]) - parseFloat(test[1]);
      setResult(result);
    }
    else if (input.includes("x")){
      var test = input.split("x");
      var result = parseFloat(test[0]) * parseFloat(test[1]);
      setResult(result);
    }
    else if (input.includes("/")){
      var test = input.split("/");
      var result = parseFloat(test[0]) / parseFloat(test[1]);
      setResult(result);
    }

    return (
      setInput(null)
    ) 
  }
  
  function DisplayButtons(){

    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var opArray = [".", "+", "-","x", "/"];

    var displayNumArr = numArray.map((element) => {
      return (
        <div key={element}>
          <button className="buttons" onClick={() => setInput(input + element)}>{element}</button>
        </div>
      )
      
    })

    var displayOpArray = opArray.map((element) => {
      return (
        <div key={element}>
          <button className="buttons" onClick={() => setOperator(element)}>{element}</button>
        </div>
      )
      
    })

    return (
      <div className="gridContainer">
        {displayNumArr}
        {displayOpArray}
        <button className="buttons" onClick={displayResult}> =</button>
        <button className="clearBtn" onClick={() => {
          return (
            setInput(""),
            setResult(null)
          )
          
        }}> CLEAR </button>
      </div>
      
    )
  }

  return (

    <div >

      <h2>Simple Calculator</h2>

      <div className="outerBox">

          <div className="header">
            <div className="displayBar">
              <p>{result == null?  input : result}</p>
            </div>
          </div>

          <div className="body">

            <DisplayButtons />

          </div>

      </div>

      
    </div>
  )
}

export default App;


// Making a Simple Calculator App
