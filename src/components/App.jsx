import React, { useState } from 'react';

function App() {
  setInterval(increase, 5000);
  const [count, setCount] = useState(0);

  function increase() {
    // in order to update...need to rerender
    setCount(count + 1);
  }
  function decrease() {
    // in order to update...need to rerender
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
