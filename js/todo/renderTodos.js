import createTodo from "./createTodo.js";

const renderTodos = (todos) => {
  let todoCompletedTasks = [];
  todos.forEach((todo) => {
    createTodo(todo.task);
    todo.isCompleted && todoCompletedTasks.push(todo.task);
  });

  const todoTexts = document.querySelectorAll(".todo-text");
  todoTexts.forEach((todoText) => {
    if (todoCompletedTasks.includes(todoText.textContent)) {
      todoText.classList.add("completed");
    }
  });
};

export default renderTodos;
