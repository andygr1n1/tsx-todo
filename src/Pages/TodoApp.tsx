import React from 'react';
import {Input} from "../Components/Input";
import {TotoList} from "../Components/Todolist";
import {useTodos} from "../Hooks/useTodos";

export const TodoApp: React.FC = () => {
    const {todos, addTodo, toggleHandler, deleteTodo} = useTodos();
    return(
        <>
            <Input onAdd={addTodo} />
            <TotoList todos={todos} onToggle={toggleHandler}  onDelete={deleteTodo}  />
        </>
    )
}
