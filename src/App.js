import { useState } from "react";
import "./App.css";
import ToDoCard from "./ToDoCard";
import ToDoList from "./ToDoList";

function App() {
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onTitleChange = (event) => setTitle(event.target.value);
  const onToDoChange = (event) => setToDo(event.target.value);

  const toggleDone = (index) => {
    //  해당 인덱스의 done을 반전시킨다.
    setToDos((currentArray) =>
      currentArray.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  const onDelete = (index) => {
    //  currentArray를 해당 인덱스를 제외한 요소들로 업데이트한다.
    setToDos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //  title 또는 toDo가 공란이면 투두 리스트에 추가하지 않는다.
    if (title === "" || toDo === "") {
      return;
    }
    //  title 또는 toDo가 공란이 아니면 투두 리스트에 이를 추가하고, 입력란을 공란으로 만든다.
    setTitle("");
    setToDo("");
    setToDos((currentArray) => [{ title, toDo, done: false }, ...currentArray]);
  };
  //  main
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
          placeholder="제목을 입력하세요..."
        ></input>
        <label htmlFor="title">내용</label>
        <input
          id="toDo"
          onChange={onToDoChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요..."
        ></input>
        <button>할 일 추가</button>
      </form>
      <hr />
      <h2>진행 중..🔥</h2>
      <ToDoList
        isDone={false}
        toDos={toDos}
        toggleDone={toggleDone}
        onDelete={onDelete}
      />
      <h2>완료..!🎉</h2>
      <ToDoList
        isDone={true}
        toDos={toDos}
        toggleDone={toggleDone}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
