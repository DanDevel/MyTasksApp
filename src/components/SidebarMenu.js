import React from 'react';
import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Link as={RouterLink} to="/">Home</Link>
      <br />
      <Link as={RouterLink} to="/add-task">Create New Tasks</Link>
      <br />
      <Link as={RouterLink} to="/list-tasks">List All Tasks</Link>
    </Box>
  );
};

export default SidebarMenu;
