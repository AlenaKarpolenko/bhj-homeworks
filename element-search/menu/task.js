const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    let menu = menuLink[i].closest('.menu__item').querySelector('ul.menu_sub');
    if (menu) {
        menuLink[i].addEventListener('click', function (event) {
            event.preventDefault();

            const dropMenuActive = document.querySelector('.menu_active');

            if (menu.classList.contains('menu_active')) {
                menu.classList.remove('menu_active')
            } else if (dropMenuActive) {
                dropMenuActive.classList.remove('menu_active');
                menu.classList.add('menu_active');
            } else {
                menu.classList.add('menu_active')
            };
        })
    }
}