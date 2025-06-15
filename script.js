// Wait until the whole HTML page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select the Add Task button
  const addButton = document.getElementById('add-task-btn');

  // Select the task input field
  const taskInput = document.getElementById('task-input');

  // Select the task list container
  const taskList = document.getElementById('task-list');

  // This function adds a new task to the list
  function addTask() {
    // Get the value of the input and remove extra spaces
    const taskText = taskInput.value.trim();

    // If the input is empty, show an alert
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create a new <li> element
    const li = document.createElement('li');

    // Create a text node with the task text and add it to the <li>
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When the remove button is clicked, remove the task from the list
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Add the remove button to the <li>
    li.appendChild(removeBtn);

    // Add the <li> to the task list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = '';
  }

  // When the "Add Task" button is clicked, call addTask
  addButton.addEventListener('click', addTask);

  // Also allow pressing "Enter" to add a task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
