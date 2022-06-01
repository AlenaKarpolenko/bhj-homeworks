const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

function onload() {
    console.log(document.cookie);
    let cookieClose = getCookie("close");
    console.log(cookieClose);
    if (!cookieClose) {
        subscribeModal.classList.add("modal_active");
    }
}

function closeModal() {
    subscribeModal.classList.remove("modal_active");
    document.cookie = 'close="true"';
}

function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}
modalClose.addEventListener('click', closeModal);
window.onload = onload();