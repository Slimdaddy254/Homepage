export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    headline.classList.add('menu-title');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuCategories = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Bruschetta', price: '$8.99', description: 'Toasted bread with fresh tomatoes and basil' },
                { name: 'Caprese Salad', price: '$10.99', description: 'Fresh mozzarella with tomatoes and balsamic glaze' }
            ]
        },
        {
            category: 'Main Courses',
            items: [
                { name: 'Spaghetti Carbonara', price: '$16.99', description: 'Classic pasta with eggs, pecorino, and guanciale' },
                { name: 'Margherita Pizza', price: '$14.99', description: 'Traditional pizza with tomato sauce, mozzarella, and basil' }
            ]
        },
        {
            category: 'Desserts',
            items: [
                { name: 'Tiramisu', price: '$7.99', description: 'Coffee-flavored Italian dessert' },
                { name: 'Panna Cotta', price: '$6.99', description: 'Italian cream dessert with berry compote' }
            ]
        }
    ];

    menuCategories.forEach(category => {
        const section = document.createElement('div');
        section.classList.add('menu-section');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categoryTitle.classList.add('category-title');

        const itemsList = document.createElement('div');
        itemsList.classList.add('menu-items');

        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const itemHeader = document.createElement('div');
            itemHeader.classList.add('item-header');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('price');

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.classList.add('item-description');

            itemHeader.appendChild(itemName);
            itemHeader.appendChild(itemPrice);
            itemDiv.appendChild(itemHeader);
            itemDiv.appendChild(itemDescription);
            itemsList.appendChild(itemDiv);
        });

        section.appendChild(categoryTitle);
        section.appendChild(itemsList);
        menuContainer.appendChild(section);
    });

    content.appendChild(headline);
    content.appendChild(menuContainer);
}
