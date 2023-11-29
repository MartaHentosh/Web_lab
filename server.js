const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const getFridgeImagePath = (imageName) => {
  const rootPath = path.join(__dirname, 'fridgeImages');
  const imagePath = path.join(rootPath, imageName);

  if (fs.existsSync(imagePath)) {
    return `/img${path.posix.join('/', path.relative(rootPath, imagePath))}`;
  } else {
    console.error(`Image not found: ${imagePath}`);
    return null;
  }
};

const fridge1 = getFridgeImagePath('fridge1.jpg');
const fridge2 = getFridgeImagePath('fridge2.jpg');
const fridge3 = getFridgeImagePath('fridge3.jpg');
const fridge4 = getFridgeImagePath('fridge4.jpg');
const fridge5 = getFridgeImagePath('fridge5.jpg');
const fridge6 = getFridgeImagePath('fridge6.jpg');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Serve static files (including images) from the 'fridgeImages' directory
app.use('/img', express.static(path.join(__dirname, 'fridgeImages')));

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

let itemsData = [...elementsData];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server'));
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

app.get('/filtered', (req, res) => {
  const { minPrice, maxPrice, type, brand, priceRange } = req.query;
  console.log('Filter Criteria:', { minPrice, maxPrice, type, brand, priceRange });

  let filteredData = [...elementsData];

  if (minPrice !== undefined && maxPrice !== undefined) {
    if (minPrice !== '' && maxPrice !== '') {
      filteredData = filteredData.filter(item => {
        const condition = item.price >= parseInt(minPrice, 10) && item.price <= parseInt(maxPrice, 10);
        console.log('Price Filter:', condition);
        return condition;
      });
    }
  }

  if (type !== 'Any' && type !== undefined) {
    const formattedType = type.trim();
    filteredData = filteredData.filter(item => {
      if (item.type === undefined || item.type === null) {
        console.error('Item type is undefined or null:', item);
        return false;
      }
      const itemType = item.type.trim();
      return itemType === formattedType;
    });
  }   

  if (brand !== 'Any' && brand !== undefined) {
    const formattedBrand = brand.trim();
    filteredData = filteredData.filter(item => {
      if (item.brand === undefined) {
        console.error('Item brand is undefined:', item);
        return false;
      }
      const itemBrand = item.brand.trim();
      return itemBrand === formattedBrand;
    });
  }

  if (priceRange !== 'Any') {
    if (priceRange === '0-2000') {
      filteredData = filteredData.filter(item => item.price >= 0 && item.price <= 2000);
    } else if (priceRange === '2000') {
      filteredData = filteredData.filter(item => item.price > 2000);
    }
  }

  console.log('Filtered Data Before Sending:', filteredData);
  res.json(filteredData);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, elementsData };