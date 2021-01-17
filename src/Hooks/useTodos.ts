import {useState, useEffect} from 'react';
import {ITodo} from "../Interfaces";

declare var confirm: (question: string) => boolean;

export const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }

    const deleteTodo = (id: number) => {
        const deleteConfirmation = confirm('Do you really want to delete this subject?')
        deleteConfirmation && setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return {todos, addTodo, toggleHandler, deleteTodo}
}
