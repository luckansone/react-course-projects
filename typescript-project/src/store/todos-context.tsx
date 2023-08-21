import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [todos, setTodo] = useState<Todo[]>([]);
    
  const onAddTodoHanlder = (text: string) => {
    setTodo((prevTodos) => [new Todo(text), ...prevTodos]);
  };

  const onDeleteItemHandler = (id: string) => {
    setTodo((prevTodos) => prevTodos.filter(item=> item.id !== id));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: onAddTodoHanlder,
    removeTodo: onDeleteItemHandler
  };

  return (<TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>);
};

export default TodosContextProvider
