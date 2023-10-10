document.addEventListener('DOMContentLoaded', function () {
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
