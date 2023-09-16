import React, { useState } from "react";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";
import FormCreate from "./FormCreate";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";

function Todo() {
  const [todoList, setTodo] = useState([
    {
      id: 1,
      nameTodo: "Go to supmarket",
      status: "new",
    },
    {
      id: 2,
      nameTodo: "Go to supmarket",
      status: "new",
    },
    {
      id: 3,
      nameTodo: "Go to supmarket",
      status: "new",
    },
    {
      id: 4,
      nameTodo: "Go to supmarket",
      status: "new",
    },
  ]);

  const handleTodoDone = (index) => {
    const newTodoList = [...todoList];
    let indexTodo = newTodoList.findIndex((todo) => todo.id === index);

    newTodoList[indexTodo].status =
      newTodoList[indexTodo].status === "new" ? "done" : "new";

    setTodo(newTodoList);
  };
  // FormCreat
  const [inputValue, setInputValue] = useState("");
  const [isCheckForm, setIsCheckForm] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleSubmit = () => {
    if (inputValue != "") {
      const newObj = {
        id: Date.now(),
        nameTodo: inputValue,
        status: "new",
      };
      todoList.push(newObj);
      setIsCheckForm(false);
      handleCloseCreate();
    } else {
      setIsCheckForm(true);
    }
  };
  // Delete
  const [showDelete, setShowDelete] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (id) => {
    setShowDelete(true);
    setTodoId(id);
  };
  const handleDeleteTodo = () => {
    const index = todoList.findIndex((todo) => todo.id === todoId);
    todoList.splice(index, 1);
    setTodo(todoList);
    handleCloseDelete();
  };

  // Update
  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  return (
    <div className="todo__table">
      <h1 className="todo__heading">TODO</h1>
      <div className="todo__container">
        <div className="todo__row">
          <input
            type="text"
            name=""
            id=""
            placeholder="Input search key"
            className="todo__search"
          />
          <button className="todo__create" onClick={handleShowCreate}>
            Create
          </button>
        </div>
        <TodoButton />
        <div className="todo__list">
          {todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              name={todoItem.nameTodo}
              status={todoItem.status}
              handleTodoDone={handleTodoDone}
              indexTodo={todoItem.id}
              handleShowDelete={handleShowDelete}
              handleShowUpdate={handleShowUpdate}
            />
          ))}
        </div>
      </div>
      <FormCreate
        showCreate={showCreate}
        handleCloseCreate={handleCloseCreate}
        handleInputChange={handleInputChange}
        checkForm={inputValue}
        handleSubmit={handleSubmit}
        isCheckForm={isCheckForm}
      />
      <DeleteForm
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
        handleDeleteTodo={handleDeleteTodo}
      />
      <UpdateForm
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
      />
    </div>
  );
}

export default Todo;
