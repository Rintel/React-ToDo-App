import React from "react";

const Option = (props) => (
  <div className="option">
    <p
      className="option__text" 
      key={props.option}
    >
      {props.count}. {props.value}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.value);
      }}
    >
      Delete Option
    </button>
  </div>
);

export default Option;