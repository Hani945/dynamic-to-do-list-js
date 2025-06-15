document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create <li> and add task text as TextNode
    const li = document.createElement('li');
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set onclick to remove the <li> from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to li
    li.appendChild(removeBtn);

    // Append li to taskList
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add click event to Add Task button
  addButton.addEventListener('click', addTask);

  // Add keypress event to input field to add task on Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});


