let initialOrder = []; // Зберігатимемо початковий порядок елементів

export function toggleSort() {
    const itemsContainer = document.getElementById('items_container');
    const sortSwitch = document.getElementById('sort_switch');
    let itemBlocks = Array.from(itemsContainer.querySelectorAll('.item__block'));

    // Якщо це перше включення перемикача, збережемо початковий порядок елементів
    if (initialOrder.length === 0) {
        initialOrder = [...itemBlocks];
    }

    // Виконуємо сортування або відновлюємо початковий порядок
    if (sortSwitch.checked) {
        itemBlocks.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.item__price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.item__price').textContent.replace('$', ''));
            return priceB - priceA;
        });
    } else {
        itemBlocks = [...initialOrder];
    }

    // Видаляємо всі елементи з контейнера
    while (itemsContainer.firstChild) {
        itemsContainer.removeChild(itemsContainer.firstChild);
    }

    // Додаємо елементи в контейнер у відсортованому порядку або початковому порядку
    itemBlocks.forEach((item) => itemsContainer.appendChild(item));
}









export function searchItems() {
    const searchInput = document.getElementById('search_input').value.toLowerCase();
    const itemBlocks = Array.from(document.querySelectorAll('.item__block'));

    itemBlocks.forEach((item) => {
        const itemName = item.querySelector('.item__paragraph').textContent.toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

export function countTotalExpenses() {
    const itemBlocks = document.querySelectorAll('.item__block');
    let totalExpenses = 0;

    itemBlocks.forEach((item) => {
        const price = parseFloat(item.querySelector('.item__price').textContent.replace('$', ''));
        totalExpenses += price;
    });

    const countResultLabel = document.getElementById('count_result_label');
    countResultLabel.textContent = `Total expenses: $${totalExpenses}`;
}
