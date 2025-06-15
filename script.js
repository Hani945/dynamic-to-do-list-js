document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // Create li and set textContent to taskText
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create remove button with textContent and class
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Onclick event to remove li from taskList
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append remove button to li
      li.appendChild(removeBtn);

      // Append li to taskList
      taskList.appendChild(li);

      // Clear input field
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }

  // Add click event listener on addButton
  addButton.addEventListener('click', addTask);

  // Add keypress event listener on taskInput for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
