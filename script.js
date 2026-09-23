const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});

document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("mobile-open");
}));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".product,.lab-card,.about,.contact").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(22px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  reveal.observe(el);
});

const style = document.createElement("style");
style.textContent = `.visible{opacity:1!important;transform:none!important}@media(max-width:850px){nav.mobile-open{display:flex;position:absolute;top:70px;left:0;right:0;padding:20px 24px;background:#070d1a;border-bottom:1px solid rgba(127,166,220,.16);flex-direction:column;align-items:flex-start;gap:20px;z-index:50}}`;
document.head.appendChild(style);
