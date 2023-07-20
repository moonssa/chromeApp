const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  console.log(li);
  todoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
