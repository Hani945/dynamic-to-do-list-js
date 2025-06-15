// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the input field
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Task Creation and Removal
    // Create a new <li> element
    const li = document.createElement('li');

    // Create a text node and append it to the <li>
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the <li>
    li.appendChild(removeBtn);

    // Append the <li> to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Attach Event Listeners

  // Add event listener to addButton that calls addTask on click
  addButton.addEventListener('click', addTask);

  // Add event listener to taskInput for Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
