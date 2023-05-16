import React from 'react';

function ToDoItem(props) {
  return (
    <div
      // means executed on click instead of on render
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
