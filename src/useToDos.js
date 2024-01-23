// useTodos.js
import { useState } from "react";

export function useToDos() {
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

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

  return {
    title,
    toDo,
    toDos,
    onTitleChange,
    onToDoChange,
    onSubmit,
  };
}
