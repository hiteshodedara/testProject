// Import the Express module
const express = require('express');
require('dotenv').config();

// Create an instance of the Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Define a route with a parameter
app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
