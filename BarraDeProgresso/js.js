const progresso = document.querySelector(".progresso");
const input = document.querySelector("input");
const numero = document.querySelector(".numero");

const alterarProgresso = () => {
  const valor = parseInt(progresso.style.width, 10);
  input.value = valor;
  numero.textContent = valor;
};

// Adicionar um event listener para detectar mudanças na barra de progresso
progresso.addEventListener("transitionend", alterarProgresso);
