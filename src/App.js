import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [toDos, setToDos] = useState([]);
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");

  const onTitleChange = (event) => setTitle(event.target.value);
  const onToDoChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "" || toDo === "") {
      return;
    }
    setTitle("");
    setToDo("");
    setToDos((currentArray) => [{ title, toDo, done: false }, ...currentArray]);
  };

  const toggleDone = (index) => {
    setToDos((currentArray) =>
      currentArray.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  const onDelete = (index) => {
    setToDos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My Todo List ({toDos.length})</h1>
      <ToDoForm
        onTitleChange={onTitleChange}
        onToDoChange={onToDoChange}
        onSubmit={onSubmit}
        title={title}
        toDo={toDo}
      />
      <hr />
      <h2>진행 중..🔥</h2>
      <ToDoList
        toDos={toDos.filter((item) => !item.done)}
        onDelete={onDelete}
        toggleDone={toggleDone}
      />
      <h2>완료..!🎉</h2>
      <ToDoList
        toDos={toDos.filter((item) => item.done)}
        onDelete={onDelete}
        toggleDone={toggleDone}
      />
    </div>
  );
}

export default App;
