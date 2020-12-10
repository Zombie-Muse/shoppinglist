import React from "react";


function handleClick() {
  console.log("Oooooohhh...Click me again daddy.")
}

function handleMouseOver() {
  <img src="https://www.fillmurray.com/300/300" alt="bill"/>
  console.log("That tickles...tehehe")
}

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="bill" onMouseOver={handleMouseOver}/>
      <br />
      <br />
      <button onClick={handleClick}>Click Me Motherfucker!!!</button>
    </div>
  )
}

export default App;