const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

function addTask() {
    if (taskInput.value.trim() !== '') {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">' + taskInput.value + '</div><a href="#" class="task__remove">&times;</a></div>');
        taskInput.value  = '';
        const taskRemove = document.getElementsByClassName("task__remove");
        Array.from(taskRemove).forEach(element => {
            element.onclick = (event) => {
                element.closest(".task").remove();
            };
        });
    };
};
tasksAdd.onclick = (event) => {
    event.preventDefault();
   addTask();
};
