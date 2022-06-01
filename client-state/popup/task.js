

document.addEventListener('DOMContentLoaded', () => {
    const subscribeModal = document.getElementById('subscribe-modal');
    const close = document.querySelector('.modal__close');
   
    if (getCookie('modal') !== 'close') {
        subscribeModal.classList.add('modal_active');
    }

    close.addEventListener('click', () => {
        subscribeModal.classList.remove('modal_active');
        document.cookie = 'modal=close';
    });    
   
    function getCookie(name) {
        const cookie = '; ' + document.cookie;
        const parts = cookie.split('; ' + name + '=');
        if (parts.length === 2) {
            return parts
            .pop()
            .split(';')
            .shift();
        }
    }
});