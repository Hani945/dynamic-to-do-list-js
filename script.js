// Step 1: Wait for the page to finish loading before running our code
document.addEventListener('DOMContentLoaded', function() {
  // Step 2: Select the elements we will use
  const addButton = document.getElementById('add-task-btn'); // The "Add Task" button
  const taskInput = document.getElementById('task-input'); // Where you type the task
  const taskList = document.getElementById('task-list'); // Where tasks will be shown

  // Step 3: Function to add a task
  function addTask() {
    // Get the task text and remove extra spaces from the start and end
    const taskText = taskInput.value.trim();

    // Check if the task is empty
    if (taskText === '') {
      alert('Please enter a task!');
      return; // Stop running if nothing was typed
    }

    // Create a new list item <li>
    const li = document.createElement('li');
    li.textContent = taskText; // Set the text inside the list item

    // Create a remove button for this task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When remove button is clicked, remove the task from the list
    removeBtn.onclick = function() {
      taskList.removeChild(li);
    };

    // Put the remove button inside the list item
    li.appendChild(removeBtn);

    // Add the list item to the task list on the page
    taskList.appendChild(li);

    // Clear the input box so it’s empty for the next task
    taskInput.value = '';
  }

  // Step 4: When the "Add Task" button is clicked, add the task
  addButton.addEventListener('click', addTask);

  // Step 5: Also add task when the Enter key is pressed inside the input box
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
