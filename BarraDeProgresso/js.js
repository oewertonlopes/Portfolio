const progresso = document.querySelector(".progresso");
const input = document.querySelector("input");
const alterarProgresso = () => {
  //progresso.classList.add("carregamento");
  progresso.setAttribute("style", "width: " + input.value + "%");
};
