import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  const OnIncrement = () => {
    setCount(count + 1);
  };

  const OnDecrement = () => {
    setCount(count - 1);
  };

  const OnReset = () => {
    setCount(0);
  }

  
  let bgColor = 'yellow';
  if (count > 0) {
    bgColor = 'red';
  } else if (count < 0) {
    bgColor = 'pink';
  }

  
  let textColor = 'black';
  if (count > 0) {
    textColor = 'white';
  } else if (count < 0) {
    textColor = 'blue';
  }

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Counter App</h1>
      <p style={{color:textColor, fontSize:'30px', fontWeight:'bold'}}>{count}</p>

      <div>
        <button className="btn" onClick={OnDecrement}>DecreaseNumber</button>
        <button className="btn" onClick={OnIncrement}>IncreaseNumber</button>
        <button className="btn" onClick={OnReset}>Reset To Zero</button>
      </div>
      
    </div>
  );
}

export default App;
