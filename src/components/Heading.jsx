import React from 'react';

const customStyle = {
  color: '',
};
const date = new Date();
const currentYear = date.getFullYear();
customStyle.color = 'green';
// place to put logic
function Heading() {
  return (
    <div>
      <h1 className="heading">{currentYear}</h1>
      <h1 style={customStyle}>My list of programming language</h1>
    </div>
  );
}

export default Heading;
