const removeTodo = (target, todos, lastValues) => {
  const todoItem = target.parentNode.parentNode;
  todoItem.parentNode.removeChild(todoItem);

  const todoText = todoItem.querySelector(".todo-text").textContent;
  const todoIndex = todos.findIndex((todo) => todo.task === todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  const lastValueIndex = lastValues.findIndex(
    (lastValue) => lastValue === todoText
  );
  lastValues.splice(lastValueIndex, 1);
  localStorage.setItem("lastValues", JSON.stringify(lastValues));
};

export default removeTodo;
