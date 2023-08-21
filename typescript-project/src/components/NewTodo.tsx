import React, {useContext} from "react";
import { useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const ctx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        ctx.addTodo(enteredText);
    };

    return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="todo-text">Enter new todo</label>
        <input id="todo-text" type="text" ref={todoTextInputRef}/>
        <button type="submit">Add new todo</button>
    </form>);
};

export default NewTodo;