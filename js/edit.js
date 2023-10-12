import { countTotalExpenses, searchItems, setCountButtonClicked } from './dom_util.js';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const itemsData = JSON.parse(localStorage.getItem('itemsData') || "[]");
    const queryParams = new URLSearchParams(window.location.search);
    const itemIndex = parseInt(queryParams.get('itemIndex')); // Make sure this is converted to a number

    const saveButton = document.getElementById('save_button');

    // Fetch and populate existing data
    const itemToEdit = itemsData[itemIndex];
    document.getElementById('title').value = itemToEdit.title;
    document.getElementById('description').value = itemToEdit.description;
    document.getElementById('price').value = itemToEdit.price;

    // Event listener for saving the changes
    saveButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        // Check if itemIndex is a valid index in itemsData
        if (itemIndex !== null && itemIndex >= 0 && itemIndex < itemsData.length) {
            // Update the item's data in the itemsData array
            itemsData[itemIndex] = {
                imageSrc: itemsData[itemIndex].imageSrc,
                title: title,
                description: description,
                price: price,
            };

            // Store the updated itemsData in localStorage
            localStorage.setItem('itemsData', JSON.stringify(itemsData));

            // Redirect back to the main page
            window.location.href = 'http://127.0.0.1:5501/index.html';
        } else {
            // Handle the case where itemIndex is not valid (e.g., show an error message)
            console.log(`Invalid itemIndex: ${itemIndex}`); // Ensure itemIndex is concatenated
        }
    });
});