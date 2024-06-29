import React,{useState} from 'react'
import axios from 'axios';


const InputTodo = () => {
    const [description, setDescription] = useState("");

    const OnSubmitForm = async () => { 
        try {
            const response = await axios.post('http://localhost:5000/todos',{description});
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }
  return (
    <div>

    </div>
  )
}

export default InputTodo