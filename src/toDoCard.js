function ToDoCard({ title, toDo }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{toDo}</p>
      <span>
        <DeleteBtn />
        <DoneBtn />
      </span>
    </div>
  );
}

function DeleteBtn() {
  return <button>삭제하기</button>;
}

function DoneBtn() {
  return <button>완료</button>;
}

export default ToDoCard;
