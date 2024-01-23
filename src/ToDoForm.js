// ToDoForm.js
import React from "react";

function ToDoForm({ onTitleChange, onToDoChange, onSubmit, title, toDo }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        onChange={onTitleChange}
        value={title}
        type="text"
        placeholder="제목을 입력하세요..."
      />
      <label htmlFor="toDo">내용</label>
      <input
        id="toDo"
        onChange={onToDoChange}
        value={toDo}
        type="text"
        placeholder="할 일을 입력하세요..."
      />
      <button type="submit">할 일 추가</button>
    </form>
  );
}

export default ToDoForm;
