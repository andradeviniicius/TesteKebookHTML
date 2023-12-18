const userName = document.getElementById("userInput");
const password = document.getElementById("passwordInput");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  console.log(messages);

  if (userName.value === "" || userName.value == null) {
    const usernameMessage = document.createElement("p");
    const newContent = document.createTextNode("Username is required!");
    usernameMessage.appendChild(newContent);
    messages.push(usernameMessage);
  }

  if (password.value === "" || password.value == null) {
    const passwordMessage = document.createElement("p");
    const newContent = document.createTextNode("Password is required!");
    passwordMessage.appendChild(newContent);
    messages.push(passwordMessage);
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.map((el) => el.innerHTML).join("<br>");
  } else {
    window.location.href = window.location.origin + "/dashboard.html";
  }
});
