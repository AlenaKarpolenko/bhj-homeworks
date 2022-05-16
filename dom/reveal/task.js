const reveal = document.querySelectorAll('.reveal');
document.addEventListener('scroll', display);


function display(event) {
    
    for (let element of reveal) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
}