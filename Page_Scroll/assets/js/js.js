const links = document.querySelectorAll("nav a");

window.onscroll = () => {
  links.forEach((link) => {
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      const top = window.scrollY;
      const offset = section.offsetTop - 60;
      const height = section.offsetHeight;

      link.classList.toggle("active", top >= offset && top < offset + height);
    }
  });
};

// Seletor do menu hamburguer
const menuCheckbox = document.querySelector("#menu-toggle");

// Seletor de todos os links do menu
const menuLinks = document.querySelectorAll("nav a");

// Adiciona o evento de clique a cada link do menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Desmarca a caixa de seleção do menu hamburguer para fechá-lo
    menuCheckbox.checked = false;
  });
});
