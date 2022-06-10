const adressForm = document.querySelector("#adress-form");
const cepInput = document.querySelector("#cep");
const adressInput = document.querySelector("#adress");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");
const fadeElement = document.querySelector("#fade");

//Validate CEP input

cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]/;
  const key = String.fromCharCode(e.keyCode);

  //alow only numbers

  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

// Get adress event

cepInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  //Check if we have the correct length

  if (inputValue.length == 8) {
    getAdress(inputValue);
  }
});

//Get customer adress from API

const getAdress = async (cep) => {
  toggleLoader();

  cepInput.blur();

  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  // show error and reset form

  if (data.erro === "true") {
    if (!adressInput.hasAttribute("disabled")) {
      toggleDisabled();
    }
    adressForm.reset();
    toggleLoader();
    toggleMessage("CEP inválido, tente novamente.");
    return;
  }
  if (adressInput.value === "") {
    toggleDisabled();
  }
  adressInput.value = data.logradouro;
  cityInput.value = data.localidade;
  neighborhoodInput.value = data.bairro;
  regionInput.value = data.uf;
  toggleLoader();
};

//Add or remove disasbled attribute

const toggleDisabled = () => {
  if (regionInput.hasAttribute("disabled")) {
    formInputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
  } else {
    formInputs.forEach((input) => {
      input.setAttribute("disabled", "disabled");
    });
  }
};

// Show or hide loader

const toggleLoader = () => {
  const loaderElement = document.querySelector("#loader");
  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");
};

//Show or hide message

const toggleMessage = (msg) => {
  const messageElement = document.querySelector("#message");
  const messageElementText = document.querySelector("#message p");

  messageElementText.innerText = msg;
  fadeElement.classList.toggle("hide");
  messageElement.classList.toggle("hide");
};

// Close messsage modal

closeButton.addEventListener("click", () => toggleMessage());

//Save address

adressForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toggleLoader();
  setTimeout(() => {
    toggleLoader();
    toggleMessage("Endereço salvo com sucesso!");
    adressForm.reset();
    toggleDisabled();
  }, 1500);
});
