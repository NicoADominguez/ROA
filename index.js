import { menuArray } from '/data.js';
import { renderMenu } from '/renderMenu.js';
import { renderCart } from '/renderCart.js';


const menuEl = document.getElementById('menu')
const cart = document.getElementById('cart')
const formEl = document.getElementById('form-el')
const payForm = document.getElementById('pay-form')
const orderConfirm = document.getElementById('order-confirmation')
const userName = document.getElementById('user-name')

// Render restauraunt menu
renderMenu(menuArray);

// render up to date cart when adding item(s) to car
menuEl.addEventListener("click", e => {
    // get id of clicked element
    const menuItemId = parseInt(e.target.id);
    
    // render cart only if + button is clicked
    // (every button has the id of its item)
    if (menuItemId >= 0 && menuItemId < menuArray.length) {
        renderCart(menuArray, menuItemId);
    }
});

// render thank you text after filling up form to pay
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // hide form to pay
    payForm.style.display = "none";
    
    // render thank you message
    orderConfirm.style.display = "block";
    orderConfirm.innerText = `Thanks, ${userName.value}! Your order is on its way!`;
    
    // hide cart
    cart.style.display = "none";
});



