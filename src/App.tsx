import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import UserItem from "./components/UserItem";
import Todos from "./components/Todos";
import { IUser } from "./components/types/types";
import { ITodo } from "./components/types/types";
import axios from "axios";
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const todoUrl = "todos?_limit=10";
  const usersUrl = "users";
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/${usersUrl}`
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
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
    <div className="App">
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClickFunction={(num) => console.log("Click", num)}
      >
        <button>Click</button>
      </Card>
      <List
        //передаем массив пользователей items={users}
        items={users}
        //renderItem эта функция параметром принимает одного пользователя типа IUser
        //и возвращает компонент UserItem
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        //передаем массив пользователей items={users}
        items={todos}
        //renderItem эта функция параметром принимает одного пользователя типа IUser
        //и возвращает компонент UserItem
        renderItem={(el: ITodo) => <Todos todo={el} key={el.id} />}
      />
    </div>
  );
}

export default App;
// install new project with TS
//npx create-react-app . --template typescript

//документация https://habr.com/ru/post/443424/
//Дженерики https://habr.com/ru/company/tinkoff/blog/588655/
