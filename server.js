const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
// import fridge1 from "./fridgeImages/fridge1"
const fridge1 = './fridgeImages/fridge1.jpg';
const fridge2 = './components/elements/fridgeImages/fridge2.jpg';
const fridge3 = './components/elements/fridgeImages/fridge3.jpg';
const fridge4 = './components/elements/fridgeImages/fridge4.jpg';
const fridge5 = './components/elements/fridgeImages/fridge5.jpg';
const fridge6 = './components/elements/fridgeImages/fridge6.jpg';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'D:', 'Web', '6')));

const elementsData = [
    {
      id: 1,
      imgSrc: fridge1,
      type: "Yellow Fridge",
      description:
        "Soft rounded curves combined with vibrant or pastel colours create real character in the kitchen.",
      brand: "Samsung",
      price: 1500,
    },
    {
      id: 2,
      imgSrc: fridge2,
      type: "Yellow Fridge",
      description:
        "A new Samsung BESPOKE Fridge with custom panels allows you to customize type for your stylish design.",
      brand: "Samsung",
      price: 1900,
    },
    {
      id: 3,
      imgSrc: fridge3,
      type: "Multicolor Fridge",
      description:
        "Renovating your kitchen? Make sure the refrigerator fits your style too! Choose your color and buy it.",
      brand: "Philipes",
      price: 2699,
    },
    {
      id: 4,
      imgSrc: fridge4,
      type: "Multicolor Fridge",
      description:
        "A monochrome fridge is so 2020. The new BESPOKE 4-Door Flex™ refrigerator comes in a range of colors.",
      brand: "Philipes",
      price: 2100,
    },
    {
      id: 5,
      imgSrc: fridge5,
      type: "Black Fridge",
      description:
        "Family Hub is designed to store more of everything for the whole family with a modern look to match your kitchen style.",
      brand: "Philipes",
      price: 2999,
    },
    {
      id: 6,
      imgSrc: fridge6,
      type: "Grey Fridge",
      description:
        "Reduce your food waste successfully with this inspiring, motivating post on How To Organize Your Fridge.",
      brand: "Samsung",
      price: 3000,
    },
  ];

app.use(bodyParser.json());
app.use(cors());
app.use('/img', express.static(path.join(__dirname, 'fridgeImages')));

let itemsData = [...elementsData];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'server'));
  });
  
  app.get('/get', (req, res) => {
      res.json(itemsData);
  });
  
  app.get('/get/:fridgeId', (req, res) => {
    const fridgeId = parseInt(req.params.fridgeId, 10);
    const fridgeInfo = itemsData.find(item => item.id === fridgeId);
  
    if (fridgeInfo) {
      res.json(fridgeInfo);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });

  let filteredData = [...elementsData];

app.get('/filtered', (req, res) => {
  const { minPrice, maxPrice, type, brand, priceRange } = req.query;

  if (minPrice !== undefined && maxPrice !== undefined) {
    filteredData = filteredData.filter(item => item.price >= parseInt(minPrice, 10) && item.price <= parseInt(maxPrice, 10));
  }

  if (type !== undefined) {
    filteredData = filteredData.filter(item => item.type === type);
  }

  if (brand !== undefined) {
    filteredData = filteredData.filter(item => item.brand === brand);
  }

  if (priceRange !== undefined) {
    if (priceRange === '0-2000') {
      filteredData = filteredData.filter(item => item.price >= 0 && item.price <= 2000);
    } else if (priceRange === '2000') {
      filteredData = filteredData.filter(item => item.price > 2000);
    }
  }
  
  res.json(filteredData);
});

app.post('/filter', (req, res) => {
  const { minPrice, maxPrice, type, brand } = req.body;

  filteredData = elementsData.filter(item =>
    item.price >= minPrice &&
    item.price <= maxPrice &&
    (type === 'Any' || item.type === type) &&
    (brand === 'Any' || item.brand === brand)
  );

  res.json(filteredData);
});

  
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = {app, elementsData};
