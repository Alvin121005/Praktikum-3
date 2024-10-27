document.getElementById("bgColor").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value; 
});

const fontSizeInput = document.getElementById("fontSize");
const fontSizeValue = document.getElementById("fontSizeValue");

fontSizeInput.addEventListener("input", function () {
  document.body.style.fontSize = this.value + "px"; 
  fontSizeValue.textContent = this.value + "px"; 
});

document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
      document.body.classList.toggle("dark-theme"); 
  });

document.getElementById("fontStyle").addEventListener("change", function () {
  document.body.style.fontFamily = this.value; 
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskValue = taskInput.value.trim(); 

  if (taskValue.length > 0 && taskValue.length <= 30) {
      const li = document.createElement("li");

      const taskText = document.createTextNode(taskValue);
      li.appendChild(taskText);

      const renameBtn = document.createElement("button");
      renameBtn.textContent = "Rename";
      renameBtn.style.marginLeft = "10px";

      renameBtn.addEventListener("click", function () {
          const newTask = prompt("Edit your task:", li.firstChild.textContent);
          if (newTask && newTask.length <= 30) {
              li.firstChild.textContent = newTask;
          }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.color = "red";
      deleteBtn.style.marginLeft = "10px";

      deleteBtn.addEventListener("click", function () {
          taskList.removeChild(li); 
      });

      li.appendChild(renameBtn);
      li.appendChild(deleteBtn);

      li.addEventListener("dblclick", function () {
          const newTask = prompt("Edit your task:", li.firstChild.textContent);
          if (newTask && newTask.length <= 30) {
              li.firstChild.textContent = newTask;
          }
      });

      taskList.appendChild(li); 
      taskInput.value = ""; 
  } else {
      alert("Tugas harus antara 1 hingga 30 karakter."); 
      taskInput.value = ""; 
  }
});