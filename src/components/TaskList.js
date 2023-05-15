import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, VStack, Table, Thead, Tbody, Tr, Th, Td, Code, Avatar } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Something went wrong: !', error);
      });
  }, []);

  const handleDelete = (id) => {
    const randomNumber = Math.floor(Math.random() * 100);
    const userInput = window.prompt(`Para confirmar a exclusão, digite o seguinte número: ${randomNumber}`);

    if (Number(userInput) === randomNumber) {
      axios.delete(`http://localhost:8080/api/tasks/${id}`)
        .then(() => {
          setTasks(tasks.filter(task => task.id !== id));
        })
        .catch(err => {
          console.error(err);
          alert('Something went wrong.');
        });
    } else {
      alert('Action aborted.');
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Heading as="h2" size="xl">My Task List</Heading>
      <VStack spacing={2} mt={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Owner</Th>
              <Th>Limit date</Th>
              <Th>Priority</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map(task => (
              <Tr key={task.id}>
                <Td>{task.title}</Td>
                <Td>{task.description}</Td>
                <Td>
                  <Avatar size="sm" name={task.owner} mr="2" />
                  {task.owner}
                </Td>
                <Td><Code>{new Date(task.limit).toLocaleDateString()}</Code></Td>
                <Td>{task.priority}</Td>
                <Td>
                  <Link to={`/edit-task/${task.id}`}>
                    <Button colorScheme="teal" mr="4">Edit task</Button>
                  </Link>
                  <Button colorScheme="red" onClick={() => handleDelete(task.id)}>Delete task</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default ListTasks;
