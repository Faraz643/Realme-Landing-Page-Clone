const itemView = document.getElementById("itemView");
const sliderButton = document.getElementById("sliderBtn");
const tombImage = document.getElementById("tomb-img");
const buildingImage = document.getElementById("building-img");
const eventElements = [tombImage, sliderButton];
const elementHeight = itemView.getBoundingClientRect().height;
const zoomSecHeight = document
  .getElementById("clarity-zoom")
  .getBoundingClientRect().y;
const zoomImage = document.querySelectorAll(".zoomable-image");

window.addEventListener("scroll", () => {
  if (window.scrollY > elementHeight) {
    itemView.classList.add("bar-fixed");
  } else {
    itemView.classList.remove("bar-fixed");
  }

});

// ---CLARITY SLIDER---

let slideCount = false;

function imageSlider() {
  if (!slideCount) {
    tombImage.style.transform = "translate(30%)";
    slideCount = true;
  } else {
    tombImage.style.transform = "translate(70%)";
    slideCount = false;
  }
}

buildingSlider = () => {
  if (slideCount) {
    tombImage.style.transform = "translate(70%)";
    slideCount = false;
  }
};

eventElements.forEach((item) => {
  item.addEventListener("click", imageSlider);
});

eventElements.forEach((item) => {
  item.removeEventListener("click", imageSlider());
});

buildingImage.addEventListener("click", buildingSlider);

buildingImage.removeEventListener("click", buildingSlider());

window.addEventListener("scroll", () => {
  zoomImage.forEach((e) => {
    if (Math.abs(scrollY - zoomSecHeight) < 700) {
      e.style.transform = "scale(8)";
    }
  });
});
