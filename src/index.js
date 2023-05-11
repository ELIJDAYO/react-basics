import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading from './components/Heading';
import List from './components/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Heading />
    <List />
  </div>
);
