
const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
let lastElement

function toolTipsActive(e) {
    e.preventDefault();
    let tooltipActive = document.getElementsByClassName("tooltip tooltip_active")[0];
    if (tooltipActive) {
        tooltipActive.remove();
    }
    let tipText = this.title;
    this.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${tipText}</div>`);
}

for (let i = 0; i < hasTooltip.length; i++) {
    const element = hasTooltip[i];
    element.addEventListener('click', toolTipsActive);
}