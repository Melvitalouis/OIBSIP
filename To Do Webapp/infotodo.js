const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="completeBtn">Complete</button>
      <button class="deleteBtn">Delete</button>
    `;
    const completeBtn = taskItem.querySelector('.completeBtn');
    const deleteBtn = taskItem.querySelector('.deleteBtn');

    completeBtn.addEventListener('click', completeTask);
    deleteBtn.addEventListener('click', deleteTask);

    pendingTasksList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function completeTask(event) {
  const taskItem = event.target.closest('li');
  taskItem.classList.toggle('completed');
  completedTasksList.appendChild(taskItem);
  event.target.remove();
}

function deleteTask(event) {
  const taskItem = event.target.closest('li');
  taskItem.remove();
}
