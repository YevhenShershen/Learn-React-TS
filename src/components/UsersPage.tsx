import React, { FC, useEffect, useState } from "react";
import { IUser } from "./types/types";
import UserItem from "./UserItem";
import axios from "axios";
import List from "./List";
const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const usersUrl = "users";
  useEffect(() => {
    fetchUsers();
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
  return (
    <List
      //передаем массив пользователей items={users}
      items={users}
      //renderItem эта функция параметром принимает одного пользователя типа IUser
      //и возвращает компонент UserItem
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};
export default UsersPage;
