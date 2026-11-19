const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.textContent = opened ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
}
const form = document.getElementById("contactForm");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  form.querySelector(".form-status").textContent =
    "Thank you. This demo form is ready to be connected to the school's email or backend.";
  form.reset();
});
window.addEventListener("load", function () {
  const loader = document.getElementById("site-preloader");

  if (loader) {
    loader.classList.add("hide");

    setTimeout(() => {
      loader.remove();
    }, 1500);
  }
});