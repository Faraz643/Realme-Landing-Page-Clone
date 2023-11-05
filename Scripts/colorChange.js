const captureGold = document.getElementById("champion-gold");
const captureBlack = document.getElementById("champion-black");
const changeDesignBtn = document.getElementById("design-change-btn");
const imageGold = document.getElementById("model-design-gold");
const imageBlack = document.getElementById("model-design-black");

const COLORS = {
  GOLD: "gold",
  BLACK: "black",
};

let changeDesignColor = (color, currentElement) => {
  changeMobileDesign(color);
  highlightSelectedDesign(currentElement);
};

captureBlack.addEventListener("click", (e) => {
  changeDesignColor(COLORS.BLACK, e);
});

captureGold.addEventListener("click", (e) => {
  changeDesignColor(COLORS.GOLD, e);
});

let highlightSelectedDesign = (clickedDesign) => {
  document
    .querySelector(".yellow-gd-active")
    .classList.remove("yellow-gd-active");
  clickedDesign.target.classList.add("yellow-gd-active");
};

let changeMobileDesign = (color) => {
  if (color === COLORS.GOLD) {
    imageBlack.style.display = "none";
    imageGold.style.display = "block";
  } else if (color === COLORS.BLACK) {
    imageBlack.style.display = "block";
    imageGold.style.display = "none";
  }
};

let initialDesignColor = COLORS.GOLD;

changeDesignBtn.addEventListener("click", function () {
  if (initialDesignColor === COLORS.GOLD) {
    changeMobileDesign(COLORS.BLACK);
    document
      .querySelector(".yellow-gd-active")
      .classList.remove("yellow-gd-active");
    captureBlack.classList.add("yellow-gd-active");
    initialDesignColor = COLORS.BLACK;
  } else {
    changeMobileDesign(COLORS.GOLD);
    document
      .querySelector(".yellow-gd-active")
      .classList.remove("yellow-gd-active");
    captureGold.classList.add("yellow-gd-active");
    initialDesignColor = COLORS.GOLD;
  }
});
