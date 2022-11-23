import React, { FC, useEffect, useState } from "react";
import { ITodo } from "./types/types";
import Todos from "./Todos";
import axios from "axios";
import List from "./List";
const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const todoUrl = "todos?_limit=10";
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/${todoUrl}`
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      //передаем массив пользователей items={users}
      items={todos}
      //renderItem эта функция параметром принимает одного пользователя типа IUser
      //и возвращает компонент UserItem
      renderItem={(el: ITodo) => <Todos todo={el} key={el.id} />}
    />
  );
};
export default TodosPage;
