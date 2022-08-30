const completedTodo = (target, todos) => {
  const todoItem = target.parentNode.parentNode;
  const todoTextElement = todoItem.querySelector(".todo-text");
  todoTextElement.classList.toggle("completed");

  const todoText = todoTextElement.textContent;
  const index = todos.findIndex((todo) => todo.task === todoText);
  if (todoTextElement.classList.contains("completed")) {
    todos[index].isCompleted = true;
  } else {
    todos[index].isCompleted = false;
  }

  localStorage.setItem("todos", JSON.stringify(todos));
};

export default completedTodo;
