const send = document.getElementById('send');
const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );


send.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', function(event) {
        progress.value = event.loaded / event.total;
    });
    xhr.send(formData);
});
