import createTodo from "./todo/createTodo.js";
import removeTodo from "./todo/removeTodo.js";
import completedTodo from "./todo/completedTodo.js";
import renderTodos from "./todo/renderTodos.js";
import renderToasts from "./toast/renderToasts.js";
import switchTheme from "./switchTheme/switchTheme.js";

window.addEventListener("load", function () {
  const todoForm = document.querySelector(".todo-form");
  todoForm?.addEventListener("submit", handleSubmitForm);

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  if (Array.isArray(todos) && todos.length > 0) renderTodos(todos);

  const lastValues = JSON.parse(localStorage.getItem("lastValues")) || [];
  const toastDuration = 1;
  const toastDelay = 2.5;

  function handleSubmitForm(e) {
    e.preventDefault();

    const todoValue = this.elements["todo"].value.trim();
    if (!todoValue) {
      return;
    } else if (lastValues.includes(todoValue)) {
      renderToasts(toastDuration, toastDelay, "Không được trùng việc", "error");
      this.elements["todo"].value = "";
      return;
    }

    createTodo(todoValue);

    lastValues.push(todoValue);
    localStorage.setItem("lastValues", JSON.stringify(lastValues));

    renderToasts(toastDuration, toastDelay, "Thêm việc thành công");

    todos.push({
      task: todoValue,
      isCompleted: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    this.elements["todo"].value = "";
  }

  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      removeTodo(e.target, todos, lastValues);
    } else if (e.target.matches(".todo-completed")) {
      completedTodo(e.target, todos);
    }
  });

  // Dark/light mode
  const toggleSwitch = document.querySelector(".switch-input");
  toggleSwitch?.addEventListener("click", switchTheme);

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "light" ? true : false;
  }
});
