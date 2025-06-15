document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create li element and set its textContent
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set onclick to remove li from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li
    li.appendChild(removeBtn);

    // Append li to taskList
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add event listener to button
  addButton.addEventListener('click', addTask);

  // Add event listener for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

