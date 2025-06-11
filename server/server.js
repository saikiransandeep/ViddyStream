// ViddyStream/server/server.js
require('dotenv').config(); // Load environment variables first

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

// Import Routes
const authRoutes = require('./routes/auth'); // <--- ADD THIS LINE

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Get MongoDB URI from .env

// Middleware
app.use(cors()); // Enable CORS for all routes (for development)
app.use(express.json()); // Body parser for JSON data

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('ViddyStream Backend API is running!');
});

// Use API Routes <--- ADD THIS SECTION
app.use('/api/auth', authRoutes); // All routes in authRoutes will be prefixed with /api/auth

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});