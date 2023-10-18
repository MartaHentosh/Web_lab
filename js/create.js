document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        errorMessage.textContent = "";

        if (!title || !description || !price) {
            errorMessage.textContent = "All fields are required!";
            return; 
        }

        const newItemData = {
            imageSrc: `images/${title.toLowerCase()}.jpg`, 
            title: title,
            description: description,
            price: price,
        };

        const itemsData = JSON.parse(localStorage.getItem('itemsData')) || [];

        itemsData.push(newItemData);

        localStorage.setItem('itemsData', JSON.stringify(itemsData));
    const submitButton = document.getElementById('submit_button');
    
    submitButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const newItemData = {
            title: title,
            description: description,
            price: price
        };

        localStorage.setItem('newItemData', JSON.stringify(newItemData));

        window.location.href = 'http://127.0.0.1:5501/index.html';
    });
});
});
