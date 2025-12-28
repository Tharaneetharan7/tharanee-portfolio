// Highlight active section in navbar (simple enhancement)
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.style.textDecoration = "underline";
    } else {
      link.style.textDecoration = "none";
    }
  });
});
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Thank you! Your message has been received.";
  form.reset();
});