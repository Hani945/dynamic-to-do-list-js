// Step 1: Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Define addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // (1) Create the <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // (2) Create the "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // (3) Add onclick to remove the <li> from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // (4) Append remove button to the <li>
    li.appendChild(removeBtn);

    // (5) Append <li> to the task list
    taskList.appendChild(li);

    // (6) Clear the input box
    taskInput.value = '';
  }

  // Step 4: Add event listeners for button and Enter key
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
