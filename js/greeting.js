const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function handleLogin(event) {
  event.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show login form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLogin);
} else {
  // show headers
  paintGreetings(savedUsername);
}
