import ToDoCard from "./ToDoCard";

function ToDoList({ isDone, toDos, toggleDone, onDelete }) {
  return (
    <div className="todo-list">
      {toDos.map((item, index) =>
        isDone
          ? item.done && (
              <ToDoCard
                key={index}
                {...item}
                toggleDone={toggleDone}
                onDelete={onDelete}
                index={index}
              />
            )
          : !item.done && (
              <ToDoCard
                key={index}
                {...item}
                toggleDone={toggleDone}
                onDelete={onDelete}
                index={index}
              />
            )
      )}
    </div>
  );
}

export default ToDoList;
