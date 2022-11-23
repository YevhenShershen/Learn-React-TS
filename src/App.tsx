import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import UserItem from "./components/UserItem";
import { IUser } from "./components/types/types";
import axios from "axios";
function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
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
    </div>
  );
}

export default App;
// install new project with TS
//npx create-react-app . --template typescript

//документация https://habr.com/ru/post/443424/
//Дженерики https://habr.com/ru/company/tinkoff/blog/588655/
