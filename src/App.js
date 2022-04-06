import React, {useState} from "react";
import './App.css';


function App() {
  const [input, setInput] = useState("");
  

  function DisplayButtons(){

    // Make an Array of buttons 
    var divArray = [];

    for (var i=0; i<15; i++) {
      if (i == 9){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput("0")} className="buttons">0</button>
        </div>)
      }
      else if (i == 10){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput(".")} className="buttons">.</button>
        </div>)
      }
      else if (i == 11){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput("")}className="buttons">=</button>
        </div>)
      }
      else if (i == 12){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput("+")}className="buttons">+</button>
        </div>)
      }
      else if (i == 13){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput("x")}className="buttons">x</button>
        </div>)
      }
      else if (i == 14){
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput("/")} className="buttons">÷</button>
          </div>)
      }
      else {
        var tempState = [...input + i];
        divArray.push(
        <div key={i+1}>
          <button onClick={() => setInput(tempState)}className="buttons">{i+1}</button>
        </div>)
      }

    }
    

    return (
      <div className="gridContainer">
        {divArray}
        <button className="clearBtn">CLEAR</button>
      </div>
      
    )

  }


  return (

    <div >

      <h2>Simple Calculator</h2>

      <div className="outerBox">

          <div className="header">
            <div className="displayBar">
              <p>{input}</p>
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

// Create this app without following any tutorials. Just brute force your way to get something working. At the end, watch a tutorial to see how others more experienced structured thier applications. 