import React, {useState} from "react";
import './App.css';


function App() {
  const [input, setInput] = useState("");

  // Just have a const variable?
  
  function DisplayButtons(){

    var testingArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "+", "x", "/"];

    var newArr = testingArray.map((element) => {
      return (
        <div key={element}>
          <button className="buttons" onClick={() => setInput(element)}>{element}</button>
        </div>
      )
      
    })

    return (
      <div className="gridContainer">
        {newArr}
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

// 1. Make the other buttons display the proper input