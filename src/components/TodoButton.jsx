import React, { useState } from "react";

function TodoButton(props) {
  const [showButton, setShowButton] = useState("tab1");

  return (
    <div className="todo__filter">
      <button
        className={`todo__button-filter ${
          showButton === "tab1" ? "active-button" : ""
        }`}
        onClick={() => {
          setShowButton("tab1");
          props.handleAllButton();
        }}
      >
        All
      </button>
      <button
        className={`todo__button-filter ${
          showButton === "tab2" ? "active-button" : ""
        }`}
        onClick={() => {
          setShowButton("tab2");
          props.handleDoneButton();
        }}
      >
        Done
      </button>
      <button
        className={`todo__button-filter ${
          showButton === "tab3" ? "active-button" : ""
        }`}
        onClick={() => {
          setShowButton("tab3");
          props.handleInProgressButton();
        }}
      >
        In-progress
      </button>
    </div>
  );
}

export default TodoButton;
