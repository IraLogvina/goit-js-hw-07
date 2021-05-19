// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const createIngredientsItemEl = ingredients => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        return itemEl;
    });
};

const ingredientsItemsEl = createIngredientsItemEl(ingredients);

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsItemsEl);
