 const menuEl = document.getElementById('menu')

export function renderMenu (menu) {
    menu.forEach( item => {
        const {
            emoji,
            name,
            ingredients,
            price,
            id
        } = item
        menuEl.innerHTML += `
        <div class ="menu-item">
            <div class="menu-item-icon">${emoji}</div>
            <div class="menu-item-info">
                <div class="item-title">${name}</div>
                <div class="item-ingredients">${ingredients}</div>
                <div class="item-price">${price}</div>
            </div>
            <button class="menu-item-add-btn" id="${item.id}">+</button>
        </div>
        <hr>
        `
    });
}