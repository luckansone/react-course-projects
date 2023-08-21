import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo; onDeleteItem: () => void }> = (
  props
) => {
  const onDeleteHandler = () => {
    props.onDeleteItem();
  };

  return <li onClick={onDeleteHandler} className={classes.item}>{props.item.text}</li>;
};

export default TodoItem;
