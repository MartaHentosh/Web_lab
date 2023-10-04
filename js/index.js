import { toggleSort, searchItems, countTotalExpenses } from './dom_util.js';

document.addEventListener('DOMContentLoaded', function () {
    const sortSwitch = document.getElementById('sort_switch');
    const searchButton = document.getElementById('search_button');
    const clearFindButton = document.getElementById('clear_find_button');
    const countButton = document.getElementById('count_button');

    // Додаємо обробник події для перемикання сортування
    sortSwitch.addEventListener('change', toggleSort);

    // Додаємо обробник події для пошуку
    searchButton.addEventListener('click', searchItems);

    // Додаємо обробник події для очищення результатів пошуку
    clearFindButton.addEventListener('click', function () {
        document.getElementById('search_input').value = '';
        searchItems();
    });

    // Додаємо обробник події для підрахунку загальних витрат
    countButton.addEventListener('click', countTotalExpenses);
});
