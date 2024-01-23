import { useState } from "react";
import DoneBtn from "./DoneBtn.js";

function ToDoCard({ title, toDo, done, index, onDelete, toggleDone }) {
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

export default ToDoCard;
