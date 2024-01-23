import React from "react";
import ToDoCard from "./ToDoCard";

function ToDoList({ toDos, onDelete, toggleDone }) {
  return (
    <div>
      {toDos.map((item, index) => (
        <ToDoCard
          key={index}
          {...item}
          index={index}
          onDelete={onDelete}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
}

export default ToDoList;
