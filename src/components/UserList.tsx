import React, { FC } from "react";
import { IUser } from "./types/types";
import UserItem from "./UserItem";
interface UserListProps {
  users: IUser[];
}
const UserListProps: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, id) => (
        <UserItem key={id} user={user} />
      ))}
    </div>
  );
};
export default UserListProps;
