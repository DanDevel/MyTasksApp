// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize an instance of express
const app = express();

// Define the options for CORS (Cross-Origin Resource Sharing)
// Here, we're setting the origin to allow requests from 'http://localhost:3000'
var corsOptions = {
  origin: 'http://localhost:3000',
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));

// Use the body-parser middleware to parse JSON requests into JS objects
app.use(bodyParser.json());

// Use the body-parser middleware to parse URL-encoded bodies
// When 'extended' is true, the module will be able to parse more complex data structures
app.use(bodyParser.urlencoded({ extended: true }));

// Import the database module
const db = require('./models');

// Synchronize the models with the database
db.sequelize.sync();

// Import and use the routes for 'task' from the 'task.routes' module
require('./routes/task.routes')(app);

// Define the port the server will run on
const PORT = process.env.PORT || 8080;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
