const book = document.querySelector('.book');
const bookControl = document.querySelector('.book__control');
const fontSize =document.querySelectorAll('.font-size')
//let control;
//let text;
for (let control of bookControl.children) {
    control.addEventListener('click', reverse)
}

function reverse(event) {
    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }
    for (let text of fontSize) {
        text.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
    event.preventDefault();

}