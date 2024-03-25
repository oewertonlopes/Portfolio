const progresso = document.querySelector(".progresso");
const input = document.querySelector("input");
const numero = document.querySelector(".numero");

const alterarProgresso = () => {
  const valor = input.value;
  progresso.setAttribute("style", "width: " + valor + "%");
  numero.textContent = valor;
};
