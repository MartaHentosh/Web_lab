import { countTotalExpenses, searchItems, setCountButtonClicked } from './dom_util.js';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const itemsData = JSON.parse(localStorage.getItem('itemsData') || "[]");
    const queryParams = new URLSearchParams(window.location.search);
    const itemIndex = parseInt(queryParams.get('itemIndex')); 

    const saveButton = document.getElementById('save_button');

    const itemToEdit = itemsData[itemIndex];
    document.getElementById('title').value = itemToEdit.title;
    document.getElementById('description').value = itemToEdit.description;
    document.getElementById('price').value = itemToEdit.price;

    saveButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');  
        errorMessage.textContent = "";
    
        if (!title || !description || price < 0) {
            errorMessage.textContent = "All fields are required , and price must be greater than or equal to 0.!";
            return;
        }
        
        if (itemIndex !== null && itemIndex >= 0 && itemIndex < itemsData.length) {
            itemsData[itemIndex] = {
                imageSrc: itemsData[itemIndex].imageSrc,
                title: title,
                description: description,
                price: price,
            };

            localStorage.setItem('itemsData', JSON.stringify(itemsData));

            window.location.href = 'http://127.0.0.1:5501/index.html';
        } else {
            console.log(`Invalid itemIndex: ${itemIndex}`); 
        }
    });
});