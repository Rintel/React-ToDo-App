import React from "react";

const Option = (props) => {
  return (
    <div>
      <p key={props.option}>{props.value}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.value);
        }}
      >
        Delete Option
      </button>
    </div>
  );
};

export default Option;