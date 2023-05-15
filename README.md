# MyTasksApp
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


## PostgreSQL, Node, Sequelize, ExpressJS :

Our task management application uses PostgreSQL as its database management system. 
It uses Sequelize, an ORM (Object-Relational Mapping) for Node.js, to facilitate communication between our application and the database.

Our database structure is quite simple, consisting of a single table called Tasks. Each task in the Tasks table has the following fields:


id - A unique identifier for each task. This is the primary key field.

title - The title of the task.

description - A detailed description of the task.

limit - The deadline for the completion of the task.

priority - The priority of the task, which can be high ('a') or low ('p').

owner - The owner of the task, i.e., the person responsible for it.

createdAt - The date and time when the task was created.

updatedAt - The date and time when the task was last updated.

Remember that the createdAt and updatedAt fields are managed automatically by Sequelize. Whenever a record is created or updated, Sequelize updates these fields with the current time.

Finally, it's worth noting that this is a very basic database structure. As the application grows and becomes more complex, it may be necessary to add more tables and establish relationships between them. However, for a simple task management application, this structure should be sufficient.


# Project Limitations
This project has some significant limitations that were encountered during development. These limitations are directly related to technical aspects and permissions, and it's crucial for users to be aware of them when interacting with the project.

## Docker
The first limitation is related to Docker installation. Although Docker is an extremely useful and widely used tool for creating and managing isolated development environments, the Docker installation on the Windows operating system has presented restrictions. These restrictions are tied to the nature of Windows itself, which limits the implementation of some Docker features.

## Google API Integration
The second limitation is regarding integration with the Google API. Initially, it was planned to integrate the project with one of Google's APIs to add additional features to the app. However, this integration was not possible due to access restrictions to Google's API. My Google account does not have free access to Google's API, and I don't have an account to share with third parties.

These limitations are temporary, and I hope to resolve them in the future. As soon as my account has access to the necessary resources, or when I get an account that allows sharing access with third parties, I will be able to add these functionalities to the project.



# Testing and Continuous Integration with GitHub Actions 
We are using GitHub Actions to automate the execution of tests in our project with each push or pull request, aiming to ensure code quality and prevent regressions.

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) tool that allows you to create custom workflows to automate your software development process straight from GitHub.

In this project, we have a workflow set up to install dependencies, run tests, and report the results directly in the GitHub interface. This helps us quickly identify any issues that may have been introduced in new code changes.

Furthermore, by using GitHub Actions, we encourage a culture of testing within our team, ensuring that all members are aware of the importance of tests and contribute to maintaining the health of our code.

Remember that the configuration for GitHub Actions is located in the .github/workflows/main.yml file at the root of our project.

It is important to emphasize that tests are a fundamental part of our development process and play a crucial role in preventing bugs and regressions before they reach production. We are committed to maintaining and improving the quality of our code and believe that test automation is an important step in this direction.


## Contribution
Contributions are always welcome! Feel free to open an Issue or a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, feel free to reach out.