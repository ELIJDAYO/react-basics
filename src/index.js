import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Elijah';
const num = 7;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      Hello {name} {num}
    </p>
  </div>,
  document.getElementById('root')
);

// reportWebVitals();
