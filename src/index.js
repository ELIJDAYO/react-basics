import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" className="animal-img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>My contact</h1>
    <Card
      name="Anaconda"
      img="/images/1-2-anaconda-picture.png"
      tel="+12345"
      email="ana@con.com"
    />
  </div>
);
