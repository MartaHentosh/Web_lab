import { toggleSort, searchItems, countTotalExpenses, setCountButtonClicked } from './dom_util.js';

function createItem(imageSrc, title, description, price) {
    const itemBlock = document.createElement('div');
    itemBlock.classList.add('item__block');

    const image = document.createElement('img');
    image.classList.add('item__images');
    image.src = imageSrc;
    image.alt = '';

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('item__paragraph');
    titleParagraph.textContent = title;

    const descParagraph = document.createElement('p');
    descParagraph.classList.add('item__description');
    descParagraph.textContent = description;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('item__price');
    priceDiv.textContent = price;

    const editRemoveButtons = document.createElement('div');
    editRemoveButtons.classList.add('edit-remove__buttons');

    const editButton = document.createElement('input');
    editButton.classList.add('edit__button');
    editButton.type = 'button';
    editButton.value = 'Edit';

    const removeButton = document.createElement('input');
    removeButton.classList.add('remove__button');
    removeButton.type = 'button';
    removeButton.value = 'Remove';

    editRemoveButtons.appendChild(editButton);
    editRemoveButtons.appendChild(removeButton);

    itemBlock.appendChild(image);
    itemBlock.appendChild(titleParagraph);
    itemBlock.appendChild(descParagraph);
    itemBlock.appendChild(priceDiv);
    itemBlock.appendChild(editRemoveButtons);

    return itemBlock;
}

const itemsContainer = document.getElementById('items_container');

const itemsData = [
    {
        imageSrc: 'images/fridge.jpg',
        title: 'Fridge Samsung',
        description: 'The refrigerator is made in a stylish modern design in silver color. It is controlled by an electronic system, and all the necessary information is displayed on the external display.',
        price: '2200$'
    },
    {
        imageSrc: 'images/fridge2.jpg',
        title: 'Fridge Samsung',
        description: 'The Samsung No Frost function prevents the formation of ice and frost on the walls of the refrigerator. Now you can store your products at the most optimal temperature.',
        price: '3000$'
    },
    {
        imageSrc: 'images/freezer.jpg',
        title: 'Freezer Gorenje',
        description: 'This freezer will be the perfect choice for everyone. Combining high power and the best cold technologies, it will ensure efficient and fast freezing of products',
        price: '900$'
    },
    {
        imageSrc: 'images/minibar.jpg',
        title: 'Minibar system Primo',
        description: 'Silent, thanks to the absence of a compressor and an environmentally friendly minibar with absorption properties and an improved cooling management system.',
        price: '500$'
    },
    {
        imageSrc: 'images/winefridge.jpg',
        title: 'Winefridge ARDESTO',
        description: 'A wine cabinet for 34 bottles with touch control panel, LED lighting, as well as a notification system in case the door is left open for a long time and the temperature deviates from the norm.',
        price: '600$'
    }
];

itemsData.forEach(item => {
    const newItem = createItem(item.imageSrc, item.title, item.description, item.price);
    itemsContainer.appendChild(newItem);
});


document.addEventListener('DOMContentLoaded', function () {
    const sortSwitch = document.getElementById('sort_switch');
    const searchButton = document.getElementById('search_button');
    const clearFindButton = document.getElementById('clear_find_button');
    const countButton = document.getElementById('count_button');

    sortSwitch.addEventListener('change', toggleSort);

    searchButton.addEventListener('click', searchItems);

    clearFindButton.addEventListener('click', function () {
        document.getElementById('search_input').value = '';
        searchItems();
    });

    countButton.addEventListener('click', function () {
        setCountButtonClicked();
        countTotalExpenses();
    });

    countTotalExpenses();
});