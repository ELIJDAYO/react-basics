import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [headingText, setHeading] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    // form cannot referesh the page
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* can't use {name} bec of realtime update by onChange */}
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          // value comes from handleChange()
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
