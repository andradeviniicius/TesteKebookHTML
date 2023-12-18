const openForgetPasswordModal = document.querySelector(
  "#open-forgetPassword-modal"
);

const closeForgetPasswordModal = document.querySelector(
  "#closeForgetPasswordModal"
);

const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

const modal = document.querySelector("#modal");
const confirmResetPasswordBtn = document.getElementById(
  "confirmResetPasswordBtn"
);

function closeModal() {
  modal.setAttribute("closing", "");

  modal.addEventListener(
    "animationend",
    (e) => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
  confirmPasswordInput.value = "";
  newPasswordInput.value = "";
  modal.close();
}

openForgetPasswordModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  if (e.target.nodeName == "DIALOG") {
    closeModal();
  }
});

closeForgetPasswordModal.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});

confirmResetPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const errorElement = document.getElementById("modalError");

  if (newPasswordInput.value === "" || confirmPasswordInput.value === "") {
    errorElement.innerText = "You have to fill both inputs";
    return;
  }
  if (newPasswordInput.value === confirmPasswordInput.value) {
    successSnackbar();
    closeModal();
  } else {
    errorElement.innerText = "Passwords must be the same";
  }
});
