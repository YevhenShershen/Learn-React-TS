import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavLink to={"/users"}>Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <div>
          <Routes>
            <Route path={"/users"} element={<UsersPage />} />
            <Route path={"/todos"} element={<TodosPage />} />
            <Route path={"/todos/:id"} element={<TodoItemPage />} />
            <Route path={"/users/:id"} element={<UserItemPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <EventsExample />
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClickFunction={(num) => console.log("Click", num)}
      >
        <button>Click</button>
      </Card> */}
    </div>
  );
}

export default App;
// install new project with TS
//npx create-react-app . --template typescript
//https://www.youtube.com/watch?v=92qcfeWxtnY
//документация https://habr.com/ru/post/443424/
//Дженерики https://habr.com/ru/company/tinkoff/blog/588655/
