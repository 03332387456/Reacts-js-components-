import React from 'react';

function Button(props) {
  let { buttons } = props;



  return (
    <div>
      {buttons.map((button, index) => (
        <button key={index} onClick={() => console.log(button)}>{button}</button>
      ))}
    </div>
  );
}

export default Button;

