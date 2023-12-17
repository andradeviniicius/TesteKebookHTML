const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

function toggleRegisterScreen() {
  alert("teste");
}

form.addEventListener("submit", (e) => {
  let messages = [];

  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join("");
  }
});
