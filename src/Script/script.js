const sections = document.querySelectorAll("section.menutracker");

const btnMobile = document.querySelector("#btn-mobile");
const navLi = document.querySelectorAll("nav ul li");
const header = document.querySelector("#header")

function sectionTracker(sections) {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("destacado");
    if (li.classList.contains(current)) {
      li.classList.add("destacado");
    }
  });
}
window.addEventListener("scroll", () => {
  sectionTracker(sections)
});

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute('aria-expanded',active);
  if(active){
    event.currentTarget.setAttribute('aria-label','Fechar menu');
  }else{
    event.currentTarget.setAttribute('aria-label','Abrir menu');
  }
}
document.querySelectorAll("#nav ul li").forEach((li) => {
  li.addEventListener("click", toggleMenu);
});


btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);