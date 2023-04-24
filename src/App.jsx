import React from "react";
import TodoStore from "./api/TodoStore";
import DisplayTodo from "./api_components/DisplayTodo";
import Form from "./api_components/Form";

const App = () => {
  return (
    <>
      <TodoStore>
        <Form></Form>
        <DisplayTodo />
      </TodoStore>
    </>
  );
};

export default App;
