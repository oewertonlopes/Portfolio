const cidade = document.getElementById("cidade");
const btn = document.querySelector(".btn");
const cidadePesquisada = document.querySelector(".resultado");
const temperatura = document.querySelector(".temperatura");
const descricao = document.querySelector(".descricao");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const valorCidade = cidade.value;
  setCidadeEstado(valorCidade);
}

function setCidadeEstado(valorCidade) {
  fetch(
    `https://weather.contrateumdev.com.br/api/weather/city/?city=${valorCidade}`
  ).then((r) =>
    r.json().then((b) => {
      cidadePesquisada.innerText = "Temperatura em " + b.name;
      temperatura.innerText = b.main.temp + " graus.";
      descricao.innerText = b.weather[0].description + ".";
    })
  );
}
