let isDarkMode = false;

function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const closeBtn = document.createElement('span');
    closeBtn.textContent = ' X';
    closeBtn.className = 'close';
    closeBtn.onclick = function() {
        deleteTask(li);
    };
    li.appendChild(closeBtn);

    li.ondblclick = function() {
        editTask(li);
    };

    li.onclick = function() {
        markAsCompleted(li);
    };

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; 
}

function deleteTask(element) {
    element.remove();
}

function editTask(element) {
    const currentText = element.childNodes[0].textContent;
    const newTask = prompt("Edit Task:", currentText);
    if (newTask) {
        element.childNodes[0].textContent = newTask;
    }
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

function changeFontStyle(style) {
    document.body.style.fontFamily = style;
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

function markAsCompleted(element) {
    element.classList.toggle('completed');
}
