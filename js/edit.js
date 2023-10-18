function getTitleImageMapping(title) {
    switch (title) {
        case 'Fridge': return 'fridge.jpg';
        case 'Winefridge': return 'winefridge.jpg';
        case 'Freezer': return 'freezer.jpg';
        case 'Minibar': return 'minibar.jpg';
        default: return ''; // handle unknown titles, or default to a generic image
    }
}
import { countTotalExpenses, searchItems, setCountButtonClicked } from './dom_util.js';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const queryParams = new URLSearchParams(window.location.search);
    const itemIndex = parseInt(queryParams.get('itemIndex'));

    const saveButton = document.getElementById('save_button');

    // Fetch item data from the server
    fetch(`http://localhost:3000/items`)
        .then(response => response.json())
        .then(data => {
            const itemsData = data;
            const itemToEdit = itemsData[itemIndex];
            if (itemToEdit) {
                const titleSelect = document.getElementById('title');
                titleSelect.value = itemToEdit.title; // Remove the transformation
                document.getElementById('description').value = itemToEdit.description;
                document.getElementById('price').value = itemToEdit.price;
            } else {
                console.log(`Invalid itemIndex: ${itemIndex}`);
            }
        })

    // Event listener for saving the changes
    saveButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');
        // Clear any previous error messages
        errorMessage.textContent = "";

        // Check if fields are empty
        if (!title || !description || price  === "" || price < 0) {
            errorMessage.textContent = "All fields are required and price can`t be less than 0!";
            return;  // Exit early if any field is empty
        }

        const imageFilename = getTitleImageMapping(title);

        const updatedItem = {
            imageSrc: `images/${imageFilename}`,
            title: title,
            description: description,
            price: price
        };

        // Send updated data to the server
        fetch(`http://localhost:3000/items/${itemIndex}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            // Redirect back to the main page after a successful update
            window.location.href = 'http://127.0.0.1:3000/index.html';
        })
        .catch(error => {
            console.error("Error updating item: ", error);
        });
    });
});