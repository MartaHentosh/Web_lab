function getImageFileName(title) {
    const titleImageMap = {
        "Fridge": "fridge.jpg",
        "Winefridge": "winefridge.jpg",
        "Freezer": "freezer.jpg",
        "Minibar": "minibar.jpg"
    };
    return titleImageMap[title] || "";  // return empty string if title not found in the map
}

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

        const imageFileName = title.replace(/\s+/g, '').toLowerCase(); // Convert the title to a format like "fridgesamsung"

        const newItemData = {
            imageSrc: `/images/${getImageFileName(title)}`,
            title: title,
            description: description,
            price: price        
        };

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItemData),
        })
        .then(response => response.json())
        .then(data => {
            // Redirect back to the main page after a successful addition
            window.location.href = 'http://127.0.0.1:3000/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});