// ToDoCard.js
import React from "react";

function DoneBtn({ text, onClick }) {
  return (
    <button className="done-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export function ToDoCard({ title, toDo, done, index, onDelete, onToggleDone }) {
  return (
    <div className={`todo-card ${done ? "done" : ""}`}>
      <h3>{title}</h3>
      <p>{toDo}</p>
      <span>
        <button className="delete-btn" onClick={() => onDelete(index)}>
          삭제하기
        </button>
        <DoneBtn
          text={done ? "취소" : "완료"}
          onClick={() => onToggleDone(index)}
        />
      </span>
    </div>
  );
}
