const cookie = document.getElementById("cookie");
const clickerCount = document.getElementById("clicker__counter");
cookie.onclick = function () {
    let click = clickerCount.textContent++;
    if (click % 2 == 0) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
}