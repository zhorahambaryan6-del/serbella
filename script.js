const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.borderBottomColor = "#444";
  } else {
    header.style.borderBottomColor = "#222";
  }
});
