import React, { useContext, useEffect, useRef, useState } from "react";
import { TStore } from "../api/TodoStore";

const Form = () => {
  let data = useContext(TStore);
  // here everything comes in form of object
  // console.log(data)

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  // Add from here
  let titleRef = useRef();
  let descRef = useRef();

  useEffect(() => {
    data.setTitle0(titleRef);
    data.setDesc(descRef);
  }, []);
  // next

  return (
    <section className="flex justify-center pt-[3vw]">
      <form
        className="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();

          // we have to send the data to create method which is store in context api
          // data.handleCreate(title, description);
          data.handleCreate(title, description, titleRef, descRef);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Title..."
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500"
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />

        <input
          type="text"
          name=""
          id=""
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500"
          placeholder="Description..."
          onChange={(e) => setDescription(e.target.value)}
          ref={descRef}
        />

        <button className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500 bg-sky-200  hover:bg-sky-300">
          Add
        </button>
      </form>
    </section>
  );
};

export default Form;
