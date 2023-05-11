import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const image1 = 'https://picsum.photos/100';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="heading">Gallery</h1>

    <img
      src="/images/1-2-anaconda-picture.png"
      alt=""
      className="animal-img"
    ></img>
    <img
      src="/images/1-2-basset-hound-png-clipart.png"
      alt=""
      className="animal-img"
    ></img>
    <img src="/images/1-2-bat-png.png" alt="" className="animal-img"></img>
    <img src={image1} alt=""></img>
    <img src={image1 + '?grayscale'} alt=""></img>
  </div>
);

// reportWebVitals();
