import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/button";
import { addTodo } from "../../redux/modules/todos";
//src/redux/modules/todos.js
///Users/leeseulmoon/programming/study_react/todo_redux_firebase/src/redux/modules/todos.js
import styles from "./input_form.module.css";

const InputForm = (props) => {
  const titleRef = useRef();
  const messageRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Math.random(),
        title: titleRef.current.value,
        message: messageRef.current.value,
        isDone: false,
      })
    );
  };

  return (
    <form className={styles.inputForm} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder="To-Do title"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Message"
        ref={messageRef}
      />
      <Button name="ADD" />
    </form>
  );
};

export default InputForm;