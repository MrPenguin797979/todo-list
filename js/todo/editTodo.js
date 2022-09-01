import removeElement from "../element/removeElement.js";
import renderToasts from "../toast/renderToasts.js";

const editTodo = (todos, beforeValue, lastValues) => {
  const TOAST_DURATION = 1;
  const TOAST_DELAY = 2.5;

  const modal = document.querySelector(".modal");
  const modalEditValue = document.querySelector(".modal-edit").value.trim();
  if (!modalEditValue) {
    removeElement(modal);
    return;
  } else if (lastValues.includes(modalEditValue)) {
    renderToasts(TOAST_DURATION, TOAST_DELAY, "Không thể chỉnh sửa", "error");
    return;
  }

  const index = todos.findIndex((todo) => todo.task === beforeValue);

  const todoTexts = document.querySelectorAll(".todo-text");
  todoTexts[index].textContent = modalEditValue;

  todos[index].task = modalEditValue;
  lastValues[index] = modalEditValue;
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("lastValues", JSON.stringify(lastValues));

  renderToasts(TOAST_DURATION, TOAST_DELAY, "Chỉnh sửa thành công", "success");
  removeElement(modal);
};

export default editTodo;
