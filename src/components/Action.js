import React from "react";

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleClick}
        disabled={!props.hasOptions}
      >
        What shall I do?
      </button>
    </div>
  );
};

export default Action;