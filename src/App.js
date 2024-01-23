import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onTitleChange = (event) => setTitle(event.target.value);
  const onToDoChange = (event) => setToDo(event.target.value);

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

  function ToDoCard({ title, toDo, done, index }) {
    //  반복해서 사용하므로, 컴포넌트로 분리한다.
    return (
      //  완료 여부에 따라 클래스를 부여하고, 버튼의 라벨을 변경한다.
      <div className={`todo-card ${done ? "done" : ""}`}>
        <h3>{title}</h3>
        <p>{toDo}</p>
        <span>
          <button className="delete-btn" onClick={() => onDelete(index)}>
            삭제하기
          </button>
          <DoneBtn
            text={done ? "취소" : "완료"}
            onClick={() => toggleDone(index)}
          />
        </span>
      </div>
    );
  }

  function DoneBtn({ text, onClick }) {
    //  완료 여부에 따라 내부 텍스트가 바뀌므로, prop을 통해 텍스트를 받기 위해 컴포넌트로 분리한다.
    return (
      <button className="done-btn" onClick={onClick}>
        {text}
      </button>
    );
  }

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
      <div className="todo-list">
        {toDos.map(
          (item, index) =>
            !item.done && <ToDoCard key={index} {...item} index={index} />
        )}
      </div>
      <h2>완료..!🎉</h2>
      <div className="todo-list">
        {toDos.map(
          (item, index) =>
            item.done && <ToDoCard key={index} {...item} index={index} />
        )}
      </div>
    </div>
  );
}

export default App;
