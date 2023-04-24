import React, { useContext } from "react";
import { TStore } from "../api/TodoStore";

const DisplayTodo = () => {
  //   const { todos } = useContext(TStore);
  const data = useContext(TStore);
  //  data.todos = {todos} same
  const { handleDelete, handleUpdate } = useContext(TStore);

  return (
    <section className="shadow-sky-200 p-[2vw] mt-[2vw]">
      <article>
        {data.todos.map((value) => {
          return (
            <div
              className="border-[3px] rounded-lg shadow-lg shadow-sky-200 p-[2vw]"
              key={value.id}
            >
              <div>
                <h1>Title : {value.title}</h1>
                <h2>Description : {value.description}</h2>
              </div>
              {/* Addd form here */}
              <div className="flex justify-between">
                <button
                  className="border-2 border-red-600 rounded-md hover:bg-red-200"
                  onClick={() => handleDelete(value.id)}
                >
                  ❌
                </button>
                <button
                  className="border-2 border-red-600 rounded-md p-[0.3vw] hover:bg-red-200"
                  onClick={() => handleDelete(value.id)}
                >
                  Done
                </button>

                <button
                  className="border-2 border-sky-500 rounded-md hover:bg-sky-200"
                  onClick={() => handleUpdate(value.id)}
                >
                  ✏️
                </button>
              </div>
              <div>
                <h3>Created on :{value.data}</h3>
              </div>
              {/* TO here */}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayTodo;
