const footerBtn = document.querySelectorAll(".footer-control-btn");

// console.log(footerBtn)

footerBtn.forEach((controlBtn) => {
  controlBtn.addEventListener("click", () => {
    controlBtn.style.transform = "rotate(-180deg)";
    if (
      controlBtn.parentElement.nextElementSibling.classList.contains("active")
    ) {
      controlBtn.style.transform = "rotate(0deg)";
    }
    controlBtn.parentElement.nextElementSibling.classList.toggle("active");
  });
});
