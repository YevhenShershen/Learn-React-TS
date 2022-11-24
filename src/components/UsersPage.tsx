import React, { FC, useEffect, useState } from "react";
import { IUser } from "./types/types";
import UserItem from "./UserItem";
import axios from "axios";
import List from "./List";
import { useNavigate } from "react-router-dom";
const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const usersUrl = "users";
  const history = useNavigate();
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
      renderItem={(user: IUser) => (
        <UserItem
          user={user}
          key={user.id}
          onCLick={(user) => history("/users/" + user.id)}
        />
      )}
    />
  );
};
export default UsersPage;
