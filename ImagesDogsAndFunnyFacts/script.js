const info = document.querySelector(".fato");
const next = document.querySelector(".next");

function fato() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(r => r.json()).then(e => {
      info.innerText = e.text;
    });
}

next.addEventListener("click", fato);

fato();




const imagem = document.querySelector(".imagem");
const proxima = document.querySelector(".proxima");

function img() {
  fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()).then(f => {
      imagem.src = f.message;
    });
}

proxima.addEventListener("click", img);

img();
