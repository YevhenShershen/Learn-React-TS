import React, { FC } from "react";
import { ITodo } from "./types/types";
interface ITodoProps {
  todo: ITodo;
}
const Todos: FC<ITodoProps> = ({ todo }) => {
  return (
    <div style={{ padding: 15, border: "1px splid gray" }}>
      <input type="checkbox" defaultChecked={todo.completed} />
      {todo.id}: {todo.title} -
      <span style={{ color: todo.completed ? "green" : "red" }}>
        {todo.completed.toString()}
      </span>
    </div>
  );
};
export default Todos;
