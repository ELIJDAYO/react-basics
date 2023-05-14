import React from 'react';

function Avatar(props) {
  return (
    <div>
      <img className="circle-img" src={props.img} alt="avatar-img" />
    </div>
  );
}

export default Avatar;
