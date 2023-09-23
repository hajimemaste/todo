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
      nameTodo: "s1",
      status: "new",
    },
    {
      id: 2,
      nameTodo: "s2",
      status: "new",
    },
    {
      id: 3,
      nameTodo: "s3",
      status: "new",
    },
    {
      id: 4,
      nameTodo: "s4",
      status: "new",
    },
  ]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const handleAllButton = () => setFilter("");
  const handleDoneButton = () => setFilter("done");
  const handleInProgressButton = () => setFilter("new");

  const handleTodoDone = (index) => {
    const newTodoList = [...todoList];
    let indexTodo = newTodoList.findIndex((todo) => todo.id === index);

    newTodoList[indexTodo].status =
      newTodoList[indexTodo].status === "new" ? "done" : "new";

    setTodo(newTodoList);
  };

  const filteredTodos = todoList
    .filter((todo) => filter === "" || todo.status === filter)
    .filter(
      (todo) =>
        search === "" ||
        todo.nameTodo.toLowerCase().includes(search.toLowerCase())
    );

  const handleSearch = (e) => setSearch(e.target.value);

  // FormCreate
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
      setInputValue("");
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
  const [index, setIndex] = useState(0);
  const [save, setSave] = useState("");
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id) => {
    setShowUpdate(true);
    setIndex(todoList.findIndex((todo) => todo.id === id));
  };
  const handleUpdate = () => {
    if (inputValue != "") {
      const newObj = {
        id: Date.now(),
        nameTodo: inputValue,
        status: "new",
      };
      todoList[index] = newObj;
      setIsCheckForm(false);
      setInputValue("");
      handleCloseUpdate();
    } else {
      setIsCheckForm(true);
    }
  };

  const handleSetInputValue = (value) => setInputValue(value);
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
            onChange={handleSearch}
          />
          <button className="todo__create" onClick={handleShowCreate}>
            Create
          </button>
        </div>
        <TodoButton
          handleAllButton={handleAllButton}
          handleDoneButton={handleDoneButton}
          handleInProgressButton={handleInProgressButton}
        />
        <div className="todo__list">
          {filteredTodos.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              name={todoItem.nameTodo}
              status={todoItem.status}
              handleTodoDone={handleTodoDone}
              indexTodo={todoItem.id}
              handleSetInputValue={handleSetInputValue}
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
        handleUpdate={handleUpdate}
        handleInputChange={handleInputChange}
        isCheckForm={isCheckForm}
        inputValue={inputValue}
      />
    </div>
  );
}

export default Todo;
