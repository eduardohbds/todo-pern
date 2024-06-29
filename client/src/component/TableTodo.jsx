import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import React,{useState} from 'react'

export const TableTodo = ({ todos, setTodos, deleteTodo}) => {
    const handleDelete = (id) => { 
        deleteTodo(id)
    }

    return (
        <Table variant="striped" colorScheme="teal">
            <Thead>
                <Tr>
                    <Th>Description</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
                {todos?.map(todo => (
                    <Tr key={todo.todo_id}>
                        <Td>{todo.description}</Td>
                        <Td>Edit</Td>
                        <Td><Button onClick={() => { handleDelete(todo.todo_id) }}>Delete</Button></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}