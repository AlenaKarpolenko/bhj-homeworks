const main = document.getElementById('modal_main');
const success =  document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');
const allClose = document.querySelectorAll('div.modal__close');


main.classList.add('modal_active'); //добав класс


showSuccess.onclick = () => {
  main.classList.remove('modal_active'); // удалить
  success.classList.add('modal_active'); // добавить
}
allClose.forEach(item => {
  item.onclick = () => { 
    item.closest('.modal').classList.remove('modal_active') // удалить
  }
})