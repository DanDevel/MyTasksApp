import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import ListTasks from './components/TaskList';
import EditTaskForm from './components/EditTaskForm';
import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';
import HomePage from './components/HomePage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/list-tasks" element={<ListTasks />} />
          <Route path="/edit-task/:id" element={<EditTaskForm />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
