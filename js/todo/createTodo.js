const createTodo = (task) => {
  const todoList = document.querySelector(".todo-list");
  const todoItemTemplate = `
    <div class="todo-item">
      <p class="todo-text">${task}</p>
      <div class="todo-action">
        <i class="fas fa-check todo-completed"></i>
        <i class="fas fa-trash todo-remove"></i>
      </div>
    </div>
  `;
  todoList?.insertAdjacentHTML("beforeend", todoItemTemplate);
};

export default createTodo;
