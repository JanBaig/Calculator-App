import React, {useState} from "react";
import './App.css';


function App() {
  const [FInput, setFInput] = useState("");
  const [SInput, setSInput] = useState("");
  const [operator, setOperator] = useState(""); 
  const [result, setResult] = useState("");

  function displayResult(){
    if (operator == "+"){
      setResult((parseFloat(FInput) + parseFloat(SInput)));
    }
    else if (operator == "-"){
      setResult((parseFloat(FInput) - parseFloat(SInput)));
    }
    else if (operator == "x"){
      setResult((parseFloat(FInput) * parseFloat(SInput)));
    }
    else if (operator == "/"){
      setResult((parseFloat(FInput) / parseFloat(SInput)));
    }

    return(
      setFInput(""),
      setSInput(""),
      setOperator("")
      
    )   
  }
  
  function DisplayButtons(){

    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var opArray = [".", "+", "-","x", "/"];

    var displayNumArr = numArray.map((element) => {

      return (
        <div key={element}>
          <button 
            
            className="buttons"
            onClick={() => {
              if (result == ""){

                if (operator == ""){
                  setFInput(FInput + element)
                }
                else {
                  setSInput(SInput + element)

                }

              }
              else {
                if (operator == ""){
                  setFInput(result + element) 
                  setResult("");
                }
                else {
                  //setSInput(SInput + element)
                  setFInput(result);
                  setSInput(SInput + element);
                  setResult("");
                }

              }
            }}>
            {element}

          </button>
        </div>
      )
      
    })

    var displayOpArray = opArray.map((element) => {
      return (
        <div key={element}>
          <button className="buttons" onClick = {() => setOperator(element)}>
            {element}</button>
        </div>
      )
      
    })

    // Testing
    console.log("TESTING")
    console.log("FInput: ", FInput);
    console.log("OP: ", operator);
    console.log("SInput: ", SInput);
    console.log("Result: ", result);

    return (
      <div className="gridContainer">
        {displayNumArr}
        {displayOpArray}
        <button className="buttons" onClick={displayResult}> =</button>
        <button 
          className="clearBtn" 
          onClick = {() => {

            return (
              setFInput(""),
              setSInput(""),
              setOperator(""),
              setResult("")

            )
            
          }}> CLEAR </button>
      </div>
      
    )
  }

  var test = SInput == ""? FInput : SInput;
  
  return (

    <div >

      <h2 className="Title">Simple Calculator</h2>

      <div className="outerBox">

          <div className="header">
            <div className="displayBar">
              {result == ""? <p className="pTag">{test} </p> : <p className = "pTag">{result}=</p>}
              
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

