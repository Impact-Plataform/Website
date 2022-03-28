const sections = []
sections.push(document.querySelector("#inicio"))
sections.push(document.querySelector("#sobre"))
sections.push(document.querySelector("#apoiadores"))
sections.push(document.querySelector("#carreiras"))
sections.push(document.querySelector("#depoimentos"))
sections.push(document.querySelector("#faq"))
sections.push(document.querySelector("#contato"))


const navLi = document.querySelectorAll("nav ul li");
const header = document.querySelector("#header")
const shrinkHeader = () => {
  if(scrollY > 10){
    header.classList.add("small-header")
  } else{
    header.classList.remove("small-header")
  }
}
window.addEventListener("scroll", () => {
  shrinkHeader()
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("destacado");
    if (li.classList.contains(current)) {
      li.classList.add("destacado");
    }
  });
});
