

//const cartProducts = document.querySelector('.cart__products');
//const productQuantityControl = document.querySelectorAll('.product__quantity-control');
//const productAdd = document.querySelectorAll('.product__add');
const products = document.querySelector('.products');
const cartProducts = Array.from(document.getElementsByClassName('cart__products'))[0];

products.addEventListener('click', function(event) {
 const productQuantityValue = event.target.closest('.product').querySelector('.product__quantity-value');
 if (event.target.closest('.product__quantity-control')) {
  if (event.target.innerText == '-' && productQuantityValue.innerText >= 2 ) {
    productQuantityValue.innerText = Number.parseInt(productQuantityValue.innerText) - 1;
  } else if (event.target.innerText == '+') {
    productQuantityValue.innerText = Number.parseInt(productQuantityValue.innerText) + 1;
  }
 } 

 if (event.target.closest('.product__add')) {
  const cartProductArr = Array.from(document.querySelectorAll('.cart__product'));
  const product = event.target.closest('.product');
  const productId = product.dataset.id;
  const productImg = product.querySelector('.product__image').src;
  const productQuantity = product.querySelector('.product__quantity-value').innerText;
  const productElement = cartProductArr.find(elem => elem.dataset.id == productId);

  if (productElement) {
    productElement.querySelector('.cart__product-count').innerText = Number(productElement.querySelector('.cart__product-count').innerText) + +productQuantity;
  } else {
   cartProducts.insertAdjacentHTML(
    'afterbegin',`<div class="cart__product" data-id="${productId}"><img class="cart__product-image" src="${productImg}"><div class="cart__product-count">${productQuantity}</div></div>`)
  }
 }
});