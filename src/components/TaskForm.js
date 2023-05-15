import React, { useState } from 'react';
import axios from 'axios';
import { Box, FormControl, FormLabel, Input, Button, VStack, Select } from '@chakra-ui/react';

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [limit, setLimit] = useState("");
  const [priority, setPriority] = useState("");
  const [taskstatus, setTaskstatus] = useState("");

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

    axios.post('http://localhost:8080/api/tasks', task)
      .then(res => {
        console.log(res.data);
        setTitle("");
        setDescription("");
        setOwner("");
        setLimit("");
        setPriority("");
        setTaskstatus("");
      })
      .catch(err => {
        console.error(err);
        alert('Algo deu errado.');
      });
  };

  return (
    <VStack spacing={4} onSubmit={handleSubmit} as="form">
      <FormControl id="title">
        <FormLabel>Title:</FormLabel>
        <Input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Description:</FormLabel>
        <Input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
      </FormControl>
      <FormControl id="owner">
        <FormLabel>Owner:</FormLabel>
        <Input type="text" value={owner} onChange={e => setOwner(e.target.value)} required />
      </FormControl>
      <FormControl id="limit">
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
      <Button type="submit" colorScheme="blue">Add Task</Button>
    </VStack>
  );
};

export default TaskForm;
