import React from "react";
import Card, { CardVariant } from "./components/Card";
function App() {
  return (
    <div className="App">
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClickFunction={() => console.log("Click")}
      >
        <button>Click</button>
      </Card>
    </div>
  );
}

export default App;
// install new project with TS
//npx create-react-app . --template typescript

//документация https://habr.com/ru/post/443424/
