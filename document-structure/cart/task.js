const cartProducts = document.querySelector('.cart__products');
const productQuantityControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');

for (let item of productQuantityControl) {
    item.addEventListener('click', value);
}
for (let item of productAdd) {
    item.addEventListener('click', addToCart);
}

function value(event) {
    let productQuantityValue = event.target.parentNode.querySelector('.product__quantity-value');
    let count = productQuantityValue.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        count++;
        productQuantityValue.innerText = count;
    } else {
        if (count > 1) {
            count--;
            productQuantityValue.innerText = count;
        } else {
            productQuantityValue.innerText = 1;
        }
    }
}

function addToCart(event) {

    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const productQuantityValue = +event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of cartProducts.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = +productCount.innerText;
            productCount.innerText = total + productQuantityValue;
            return false;
        }
    }
    const count = product.querySelector('.product__quantity-value').innerText;
    const productImg = product.querySelector('.product__image').src;
    const productCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;
    cartProducts.insertAdjacentHTML('beforeend', productCart);
}