let fontSize = 16;

function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();

    if (taskText.length > 30) {
        alert("Hanya bisa mengisi maksimal 30 karakter!");
        return;
    }

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const closeBtn = document.createElement("span");
        closeBtn.textContent = " X";
        closeBtn.className = "close";
        closeBtn.onclick = function() {
            deleteTask(this.parentElement);
        };
        
        const editBtn = document.createElement("span");
        editBtn.textContent = "✎";
        editBtn.className = "edit";
        editBtn.onclick = function() {
            editTask(this.parentElement);
        };

        li.appendChild(editBtn);
        li.appendChild(closeBtn);
        
        li.ondblclick = function() {
            editTask(this);
        };

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.remove();
}

function editTask(element) {
    const currentText = element.childNodes[0].textContent.trim();
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    input.onkeypress = function(event) {
        if (event.key === "Enter") {
            if (input.value.length > 30) {
                alert("Hanya bisa mengisi maksimal 30 karakter!");
                return;
            }
            const updatedText = input.value.trim();
            if (updatedText) {
                element.childNodes[0].textContent = updatedText; // Update text
            }
            // Remove the input and re-add edit and close buttons
            element.innerHTML = ""; 
            const editBtn = document.createElement("span");
            editBtn.textContent = "✎";
            editBtn.className = "edit";
            editBtn.onclick = function() {
                editTask(this.parentElement);
            };
            const closeBtn = document.createElement("span");
            closeBtn.textContent = " X";
            closeBtn.className = "close";
            closeBtn.onclick = function() {
                deleteTask(this.parentElement);
            };
            element.appendChild(document.createTextNode(updatedText));
            element.appendChild(editBtn);
            element.appendChild(closeBtn);
        }
    };

    element.innerHTML = ""; 
    element.appendChild(input);
    input.focus(); 
}

function changeBackgroundColor() {
    const bgColor = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = bgColor;
}

function changeFontSize(size) {
    const body = document.body;
    fontSize = size;
    body.style.fontSize = fontSize + 'px';
    document.getElementById("fontSizeValue").textContent = fontSize + 'px';
    const container = document.querySelector('.container');
    container.style.fontSize = fontSize + 'px';
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
    const fontStyle = document.getElementById("fontStyle").value;
    document.body.style.fontFamily = fontStyle;
}
