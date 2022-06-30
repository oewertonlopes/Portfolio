const vSenha = document.querySelector("#senha");
let senhaNormal = localStorage.getItem("senhaNormal");
let senhaPreferencial = localStorage.getItem("senhaPreferencial");
let ultSenha = localStorage.getItem("ultSenha");
let audio = new Audio('alerta.wav');

if (!senhaNormal) senhaNormal = 0;
if (!senhaPreferencial) senhaPreferencial = 0;
if (!ultSenha) ultSenha = "N";

mostrarSenha();

window.addEventListener("keydown", function (e) {
  if (e.key == "n" || e.key == "N") {
    senhaNormal++;
    ultSenha = "N";
    audio.play();
  } else if (e.key == "p" || e.key == "P") {
    senhaPreferencial++;
    ultSenha = "P";
    audio.play();
  } else if (e.key == "r" || e.key == "R") {
    ultSenha = "N";
    senhaNormal = 0;
    senhaPreferencial = 0;
  }

  this.localStorage.setItem("senhaNormal", senhaNormal),
    this.localStorage.setItem("senhaPreferencial", senhaPreferencial),
    this.localStorage.setItem("ultSenha", ultSenha),
    mostrarSenha();
});
function mostrarSenha() {
  if (ultSenha == "N") {
    vSenha.innerHTML = `N${parseInt(senhaNormal).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })}`;
  } else {
    vSenha.innerHTML = `P${parseInt(senhaPreferencial).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })}`;
  }
}
