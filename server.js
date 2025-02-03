// Import required packages
const express = require('express');
const cors = require('cors');

// Create an instance of the app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data
app.use(express.static('website')); // Serve static files from 'website' folder

// API endpoint
let projectData = {};

// Start the server
const port = process.env.PORT || 8000; // Use environment port or 8000 as default
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});

// Logging middleware (Optional)
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Default route for the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/website/index.html');
});

// GET route to return project data
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route to add data to projectData
app.post('/add', (req, res) => {
    try {
        projectData = {
            temperature: req.body.temperature,
            date: req.body.date,
            userResponse: req.body.userResponse,
        };
        res.send({ message: 'Data added successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error adding data', error });
    }
});