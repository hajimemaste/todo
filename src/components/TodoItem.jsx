import React from "react";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";

function TodoItem(props) {
  return (
    <div className="todo__item">
      <p
        className={`todo__item-name ${props.status === "done" ? "done" : ""}`}
        onClick={() => props.handleTodoDone(props.indexTodo)}
      >
        {props.name}
      </p>
      <div
        className="todo__delete"
        onClick={() => props.handleShowDelete(props.indexTodo)}
      >
        <TrashFill />
      </div>
      <div
        className="todo__edit"
        onClick={() => {
          props.handleShowUpdate(props.indexTodo);
          props.handleSetInputValue(props.name);
        }}
      >
        <PencilSquare />
      </div>
    </div>
  );
}

export default TodoItem;
