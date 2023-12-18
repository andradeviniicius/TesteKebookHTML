const openForgetPasswordModal = document.querySelector(
  "#open-forgetPassword-modal"
);

const closeForgetPasswordModal = document.querySelector(
  "#close-forgetPassword-modal"
);

const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

const modal = document.querySelector("#modal");

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
  showConfirmToast();
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
