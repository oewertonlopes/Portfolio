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