import { useState } from "react";

function App() {
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

  function ToDoCard({ title, toDo, done, index }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{toDo}</p>
        <span>
          <button onClick={() => onDelete(index)}>삭제하기</button>
          <DoneBtn
            text={done ? "취소" : "완료"}
            onClick={() => toggleDone(index)}
          />
        </span>
      </div>
    );
  }

  function DoneBtn({ text, onClick }) {
    return <button onClick={onClick}>{text}</button>;
  }

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
          placeholder="할 일을 입력하세요..."
        ></input>
        <button>할 일 추가</button>
      </form>
      <hr />
      <h2>진행 중..🔥</h2>
      {toDos.map((item, index) => (
        <ToDoCard key={index} {...item} index={index} />
      ))}
      <h2>완료..!🎉</h2>
    </div>
  );
}

export default App;
