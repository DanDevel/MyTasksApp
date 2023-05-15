import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Heading, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import axios from 'axios';

const EditTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [limit, setLimit] = useState("");
  const [priority, setPriority] = useState("");
  const [taskstatus, setTaskstatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/tasks/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setOwner(response.data.owner);
        setLimit(response.data.limit);
        setPriority(response.data.priority);
        setTaskstatus(response.data.taskstatus);
      })
      .catch(error => {
        console.error('Houve um erro!', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: title,
      description: description,
      owner: owner,
      limit: limit,
      priority: priority,
      taskstatus: taskstatus
    };

    axios.put(`http://localhost:8080/api/tasks/${id}`, task)
      .then(() => {
        setTitle("");
        setDescription("");
        setOwner("");
        setLimit("");
        setPriority("");
        setTaskstatus("");
      })
      .catch(err => {
        console.error(err);
        alert('Something went wrong: .');
      });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Heading as="h2" size="xl">Editar Tarefa</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
          <FormLabel>Título:</FormLabel>
          <Input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Descrição:</FormLabel>
          <Input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Owner:</FormLabel>
          <Input type="text" value={owner} onChange={e => setOwner(e.target.value)} required />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Limit Date:</FormLabel>
          <Input type="date" value={limit} onChange={e => setLimit(e.target.value)} required />
        </FormControl>
        <FormControl id="priority">
        <FormLabel>Priority:</FormLabel>
        <Select placeholder="Select priority" value={priority} onChange={e => setPriority(e.target.value)} required>
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="regular">Regular</option>
        </Select>
      </FormControl>
      <FormControl id="status">
        <FormLabel>Task Status:</FormLabel>
        <Select placeholder="Select status" value={taskstatus} onChange={e => setTaskstatus(e.target.value)} required>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="to do">To Do</option>
        </Select>
      </FormControl>
        <Button colorScheme="blue" type="submit" mt={4}>Atualizar Tarefa</Button>
      </form>
    </Box>
  );
};

export default EditTaskForm;
