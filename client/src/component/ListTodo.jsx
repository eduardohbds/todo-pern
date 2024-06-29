import React, { useState, useEffect } from 'react'
import axios from "axios"
import { TableTodo } from './TableTodo';


const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete("http://localhost:1300/todos/${id}")
            setTodos(todos.filter((todo) => { return todo.todo_id !== id }))
        } catch (error) {
            console.error(error.message);
        }
    }
    const getTodo = async () => {
        try {
            const response = await axios.get("http://localhost:1300/todos")
            return response.data
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodo().then((data) => { 
            setTodos(data)
        });
    }, [])


    return (
        <div>
            <TableTodo todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default ListTodo