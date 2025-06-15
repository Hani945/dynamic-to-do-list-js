document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from local storage on page load
  loadTasks();

  // Add task when button is clicked
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
    } else {
      alert("Please enter a task.");
    }
  });

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
      } else {
        alert("Please enter a task.");
      }
    }
  });

  // Function to add a task
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeTask(taskText);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')  '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    taskInput.value = "";
  }

  // Function to remove a task from local storage
  function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks')  '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Function to load tasks from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }
});