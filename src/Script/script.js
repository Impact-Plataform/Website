const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const header = document.querySelector("#header")
window.addEventListener("scroll", () => {
  //shrink header
  if(scrollY > 10){
    header.classList.add("small-header")
  } else{
    header.classList.remove("small-header")
  }
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(`Element: ${section.id} \nScrollY: ${scrollY} \n ${sectionTop - sectionHeight / 3}` );
    if (scrollY >= sectionTop - sectionHeight / 3) {
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
