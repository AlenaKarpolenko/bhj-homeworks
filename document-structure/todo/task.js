const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

button.onclick = () => {
    const fullForm = button.closest('form');
    const inputForm = fullForm.querySelector('input');
    const task = inputForm.value;
    if (task.trim() != '') {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">' + task + '</div><a href="#" class="task__remove">&times;</a></div>');
        inputForm.value = '';
    };
    const taskRemove = tasksList.getElementsByClassName('task__remove');
    const clear = taskRemove[taskRemove.length - 1];
    clear.addEventListener('click', () => {
        const divTask = clear.closest('div.task');
        tasksList.removeChild(divTask);
    });
    return false;
};