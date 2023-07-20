const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  parsedToDos.forEach(paintTodo);
}
