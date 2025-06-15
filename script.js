document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // Create a new li element
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a new button for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';

      // Assign an onclick event to the remove button
      removeButton.onclick = function () {
        taskList.removeChild(li);
      };

      // Append the remove button to the li
      li.appendChild(removeButton);

      // Append the li to taskList
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  }

  // Add an event listener to addButton that calls addTask when clicked
  addButton.addEventListener('click', function () {
    addTask();
  });

  // Add an event listener to taskInput for the 'keypress' event
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
