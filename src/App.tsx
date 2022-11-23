import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
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
      <UserList users={users} />
    </div>
  );
}

export default App;
// install new project with TS
//npx create-react-app . --template typescript

//документация https://habr.com/ru/post/443424/
