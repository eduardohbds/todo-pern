import React,{useState} from 'react'
import axios from 'axios';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
} from '@chakra-ui/react'
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

    const handleChange = (e) => {
        setDescription(e.target.value);
    }
return (
    <>
        <FormControl>
            <FormLabel>Add ToDo List</FormLabel>
            <Input value={description} onChange={handleChange}/>
            <Button onClick={OnSubmitForm}>Add</Button>
        </FormControl>
    </>
)}

export default InputTodo;