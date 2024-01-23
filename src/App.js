import { useState, useEffect } from "react";
//import ToDoCard from "./toDoCard.js";

function App() {
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");
  const [done, setDone] = useState(false);
  const [toDos, setToDos] = useState([]);
  const onTitleChange = (event) => setTitle(event.target.value);
  const onToDoChange = (event) => setToDo(event.target.value);

  function ToDoCard({ title, toDo, done }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{toDo}</p>
        <span>
          <DeleteBtn />
          <DoneBtn text={done ? "취소" : "완료"} />
        </span>
      </div>
    );
  }

  function DeleteBtn() {
    return <button>삭제하기</button>;
  }

  function DoneBtn({ text }) {
    const onClick = () => setDone((current) => !current);
    return <button onClick={onClick}>{text}</button>;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "" || toDo === "") {
      return;
    }
    setTitle("");
    setToDo("");
    setToDos((currentArray) => [[title, toDo, done], ...currentArray]);
  };

  const toggleDone = (idx) => {};
  return (
    <div>
      <h1>My Todo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          onChange={onTitleChange}
          value={title}
          type="text"
          placeholder="title"
        ></input>
        <label htmlFor="title">내용</label>
        <input
          id="toDo"
          onChange={onToDoChange}
          value={toDo}
          type="text"
          placeholder="Write your to-do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <h2>Working..🔥</h2>
      {toDos.map(([title, toDo, done]) => (
        <ToDoCard title={title} toDo={toDo} done={done} />
      ))}
      <h2>Done..!🎉</h2>
    </div>
  );
}

export default App;
