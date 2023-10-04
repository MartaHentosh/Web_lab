// Функція для перемикання сортування
export function toggleSort() {
  const itemsContainer = document.getElementById('items_container');
  const sortSwitch = document.getElementById('sort_switch');

  // Отримуємо всі блоки товарів
  const itemBlocks = Array.from(itemsContainer.querySelectorAll('.item__block'));

  // Сортуємо товари за ціною (від найдорожчого до найдешевшого або навпаки)
  if (sortSwitch.checked) {
      itemBlocks.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.item__price').textContent.replace('$', ''));
          const priceB = parseFloat(b.querySelector('.item__price').textContent.replace('$', ''));
          return priceA - priceB;
      });
  } else {
      itemBlocks.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.item__price').textContent.replace('$', ''));
          const priceB = parseFloat(b.querySelector('.item__price').textContent.replace('$', ''));
          return priceB - priceA;
      });
  }

  // Переносимо відсортовані товари назад у контейнер
  itemBlocks.forEach((item) => itemsContainer.appendChild(item));
}

// Функція для пошуку товарів за назвою
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

// Функція для підрахунку загальних витрат
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
