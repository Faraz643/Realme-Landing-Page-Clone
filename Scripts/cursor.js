const cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", function (e) {
  document.addEventListener("mousemove", function (e) {
    //     cursor.animate(
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    //       {
    //         left: e.clientX + "px",
    //         top: e.clientY + "px",
    //       },
    //       {
    //         // duration: 500,
    //         // fill: 'forwards',
    //       }
    //     );
  });
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow-cursor");
    cursor.classList.remove("grow-cursor-small");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow-cursor");
    if (link.classList.contains("c-small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-cursor-small");
    }
  });
});
