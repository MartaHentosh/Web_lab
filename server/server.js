const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from 'C:\Users\user\Desktop\Марти лаба'
app.use(express.static(path.join('D:', 'Web', '5')));


// Predefined List
const PREDEFINED_ITEMS = [
    {
        imageSrc: "/images/fridge.jpg",
        title: 'Fridge',
        description: 'The refrigerator is made in a stylish modern design in silver color. It is controlled by an electronic system, and all the necessary information is displayed on the external display.',
        price: '2200'
    },
    {
        imageSrc: "/images/freezer.jpg",
        title: 'Freezer',
        description: 'This freezer will be the perfect choice for everyone. Combining high power and the best cold technologies, it will ensure efficient and fast freezing of products',
        price: '900'
    },
    {
        imageSrc: "/images/minibar.jpg",
        title: 'Minibar',
        description: 'Silent, thanks to the absence of a compressor and an environmentally friendly minibar with absorption properties and an improved cooling management system.',
        price: '500'
    },
    {
        imageSrc: "/images/winefridge.jpg",
        title: 'Winefridge',
        description: 'A wine cabinet for 34 bottles with touch control panel, LED lighting, as well as a notification system in case the door is left open for a long time and the temperature deviates from the norm.',
        price: '600'
    }
];

// In-memory data storage initialized with predefined list
let itemsData = [...PREDEFINED_ITEMS];

// Root route to send index.html
app.get('/', (req, res) => {
    res.sendFile(path.join('D:', 'Web', '5', 'index.html'));
});

// GET /items - Fetch all items
app.get('/items', (req, res) => {
    res.json(itemsData);
});

// POST /items - Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    itemsData.push(newItem);
    res.json(newItem);
});

// PUT /items/:index - Update an existing item
app.put('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData[index] = req.body;
        res.json(itemsData[index]);
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

// DELETE /items/:index - Delete an item
app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData.splice(index, 1);
        res.json({ message: "Item deleted successfully!" });
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

// Server Initialization
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Exporting for testing purposes
module.exports = app;