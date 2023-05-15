import React from 'react';
import Login from './Login';

var isLoggedIn = false;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hell0</h1> : <Login />}</div>
  );
}

export default App;
