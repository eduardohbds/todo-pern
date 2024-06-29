import React, { useState } from 'react'
import axios from "axios"
const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async () => { 
        try {
            const response = await axios.delete("http://localhost:1300/todos/${id}")
            setTodos(todos.filter((todo) => { todo.todo_id !== id }))
        } catch (error) {
            console.error(error.message);
        }
    }
    const getTodo = async () => { 
        try {
            const response = await axios.get("http://localhost:1300/todos/")
            const jsonData = await response.data()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
    getTodo();
    }, [])
    return (
        <div>

        </div>
    )
}

export default ListTodo