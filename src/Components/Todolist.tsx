import React from 'react';
import {TodoListProps} from "../Interfaces";

export const TotoList: React.FC<TodoListProps> = ({todos, onToggle, onDelete}) => {

        if (todos.length === 0) {
            return (<p className="center">Nothing to do!</p>)
        }

        const removeHandler = (event: React.MouseEvent, id: number) => {
            event.preventDefault()
            onDelete(id);
        }

        return (
            <ul>
                {todos.map((todo) => {
                    const classes = ['todo']
                    if(todo.completed) {
                        classes.push('completed')
                    }

                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input  className="filled-in"
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={onToggle.bind(null, todo.id)}
                                />
                                <span>{todo.title}</span>
                                <i className="material-icons  text-darken-3"
                                   onClick={(event) =>
                                   {removeHandler(event, todo.id) }}>delete</i>
                            </label>
                        </li>
                    )

                })}
            </ul>
        )
}
