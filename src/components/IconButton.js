import React from "react";

const IconButton = (props) => {
  return (
    <button className={props.className}>
      {props.text}
      <i className={props.icon}/>
    </button>
  );
};

export default IconButton;
