
const hasTooltip = document.getElementsByClassName('has-tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    let toAdd = '<div class="tooltip">' + hasTooltip[i].title + '</div>';
    hasTooltip[i].insertAdjacentHTML('afterend', toAdd);
};
let tooltip = document.getElementsByClassName('tooltip');

for (let a = 0; a < hasTooltip.length; a++) {
    hasTooltip[a].onclick = () => {
        tooltip[a].style.top = hasTooltip[a].getBoundingClientRect().top + 20 + "px";
        tooltip[a].style.left = hasTooltip[a].getBoundingClientRect().left + "px";
        tooltip[a].classList.toggle('tooltip_active');
        return false;
    };
};
