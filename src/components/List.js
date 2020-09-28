import React from "react";
import Task from "./Task";

const List = ({ list, setList }) => {
  const completedTask = list.filter((task) => task.completed === true);
  const uncompletedTask = list.filter((task) => task.completed === false);
  return (
    <div className="tasksList">
      <ul>
        {uncompletedTask.map((task, id) => {
          return (
            <Task
              task={task}
              key={task.id}
              list={list}
              setList={setList}
            ></Task>
          );
        })}
      </ul>
      <ul>
        {completedTask.map((task, id) => {
          return (
            <Task
              task={task}
              key={task.id}
              list={list}
              setList={setList}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
