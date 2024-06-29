import React, { useState } from 'react'
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input
} from '@chakra-ui/react'
const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo ? todo.description : "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateDescription = async () => {
    try {
      console.log("id" + todo.todo_id);
      console.log("description" + description);
      const response = await axios.put(
        `http://localhost:1300/todos/${todo.todo_id}`, {description})
        console.log("Updated successfully:", response.data);
      } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      <Button onClick={onOpen}>Edit Item</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='text' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green' onClick={() => { 
              updateDescription();
              onClose();
            }}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default EditTodo