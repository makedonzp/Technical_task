const btn = document.querySelector(".btn");
const scrollViewMain = document.querySelector(".first_photo");
console.log(scrollViewMain);
btn.addEventListener("click", () => {
  scrollViewMain.scrollIntoView({
    block: "nearest",
    inline: "start",
    behavior: "smooth",
  });
});
