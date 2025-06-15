document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // Create new li element and set its text
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Assign onclick event to remove li element from taskList
      removeBtn.onclick = function () {
        li.remove(); // ✅ Removes the li itself
      };

      // Append remove button to li, then li to task list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }

  // Add event listener to addButton for click
  addButton.addEventListener('click', function () {
    addTask();
  });

  // Add event listener to taskInput for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
