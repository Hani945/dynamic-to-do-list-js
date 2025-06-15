document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define addTask function with optional alert control
  function addTask(showAlert = true) {
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
    } else if (showAlert) {
      alert('Please enter a task!');
    }
  }

  // Attach event listener to addButton click
  addButton.addEventListener('click', function () {
    addTask(true); // show alert if empty on user click
  });

  // Attach event listener to taskInput keypress for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(true); // show alert if empty on Enter key
    }
  });

  // Invoke addTask on DOMContentLoaded, but don't show alert if empty
  addTask(false);
});
