window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("olaaaaaaa");
    document.querySelector("#header").style.height = "10vh";
  } else {
    document.querySelector("#header").style.height = "13vh";
  }
}