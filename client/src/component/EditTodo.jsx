import React,{useState} from 'react'
import axios from "axios";

const EditTodo = ({todo}) => {
  const [description, setDescription] = useState(todo.description);
  const updateDescription = async () => { 
    try {
      const body = {description};
      const response = await axios.put("http://localhost:1300/todos/${id}",{ description: body })
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>

    </div>
  )
}

export default EditTodo