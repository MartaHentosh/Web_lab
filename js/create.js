document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form's default submission

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        // Clear any previous error messages
        errorMessage.textContent = "";

        // Check if fields are empty
        if (!title || !description || !price) {
            errorMessage.textContent = "All fields are required!";
            return;  // Exit early if any field is empty
        }

        const newItemData = {
            imageSrc: `images/${title.toLowerCase()}.jpg`, 
            title: title,
            description: description,
            price: price,
        };

        // Retrieve the existing itemsData from localStorage
        const itemsData = JSON.parse(localStorage.getItem('itemsData')) || [];

        // Add the new item to the itemsData array
        itemsData.push(newItemData);

        // Store the updated itemsData in localStorage
        localStorage.setItem('itemsData', JSON.stringify(itemsData));

        // Redirect back to the main page
        window.location.href = 'http://127.0.0.1:5501/index.html';
    });
});
