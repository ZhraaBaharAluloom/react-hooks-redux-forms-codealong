import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(todoAdded(text));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>Add a new task</label>
        <input type="text" onChange={handleChange} value={text} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
