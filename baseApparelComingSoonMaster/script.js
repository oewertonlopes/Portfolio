const button = document.querySelector("button");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const emailcamp = document.getElementById("email");
const alertError = document.querySelector(".alert-error");

function validation() {
  if (!emailcamp.value.match(pattern) || (emailcamp.value = "")) {
    alertError.classList.add("invalid");
    emailcamp.classList.add("error");
  } else {
    alertError.classList.remove("invalid");
    emailcamp.classList.remove("error");
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  validation();
});
