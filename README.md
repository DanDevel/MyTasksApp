# MyTasksApp
Tasks App Demo

This is a task management application developed in React with the Chakra UI component library for styling and a backend API created with Express.js and Sequelize, using PostgreSQL as the database. The application allows the user to view, create, edit, and delete tasks.

## Prerequisites

Before you begin, make sure you have Node.js, npm, and PostgreSQL installed on your machine.

## Installation

Clone this repository to your local machine using https://github.com/DanDevel/MyTasksApp .

Navigate to the repository folder on your machine and install all necessary dependencies using the npm install command.

Set up the PostgreSQL database according to the settings in the config/db.config.js file.

Start the backend server using npm run start:server.

Start the frontend server using npm start.

The application should now be running and available for access at http://localhost:3000.
The NODE SERVER.JS should now be running and available for access at http://localhost:8080.

## Folder Structure

src/: Where all the frontend source code is located.
server/: Where all the backend source code is located.
server/models/: Contains the Sequelize models.
server/routes/: Defines all the API routes.
server/controllers/: Contains the control logic for data handling.
server/config/: Server and database settings.

## Features
List Tasks: Displays a list of all existing tasks. Each task has a title, description, owner, deadline, and priority. There's also an avatar next to the owner's name for better visualization.
Create Task: Allows the user to create a new task by providing details such as title, description, owner, deadline, and priority.
Edit Task: Allows the user to edit the details of an existing task.
Delete Task: Allows the user to delete an existing task. Before deletion, the user needs to confirm the action by inputting a random number provided by the system.
Dashboard: Provides an overview of tasks by priority in a pie chart and a bar chart. Additionally, it provides the total task count and the details of the last created task.

## Technologies used

React.js
Chakra UI
Express.js
Sequelize
PostgreSQL
axios
react-router-dom
recharts

## Contribution
Contributions are always welcome! Feel free to open an Issue or a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, feel free to reach out.
