import React from "react";

const Form = ({ newTaskInput, setNewTaskInput, list, setList }) => {
  const submitAddTask = (event) => {
    event.preventDefault();
    setList([
      ...list,
      {
        id: list.length + 1,
        text: newTaskInput,
        completed: false,
      },
    ]);
    setNewTaskInput("");
  };

  return (
    <div className="form">
      <form action="">
        <input
          type="text"
          placeholder="add a new task"
          value={newTaskInput}
          onChange={(event) => {
            const newTask = event.target.value;
            setNewTaskInput(newTask);
          }}
        />
        <button type="submit" onClick={submitAddTask}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
