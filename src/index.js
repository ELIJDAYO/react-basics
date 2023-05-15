import React from 'react';
import ReactDOM from 'react-dom/client';
import cars from './practice.js';

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour, teslaSecondCol],
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour, hondaSecondCol],
} = honda;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top-Speed</th>
      <th>Top-Color1</th>
      <th>Top-Color2</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaSecondCol}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaSecondCol}</td>
    </tr>
  </table>
);
