window.addEventListener("load", () => {
  const SECTIONS = Array.from(document.querySelectorAll("section>div"));
  SECTIONS.forEach((element) => {
    if (!element.classList.contains("op-none")) {
      element.classList.add("animate-reveal");
    }
  });

  const animationElements = document.querySelectorAll(".animate-reveal");

  gsap.registerPlugin(ScrollTrigger);
  animationElements.forEach((elements) => {
    gsap.set(elements, {
      y: "10%",
      opacity: 0,
    });

    scrollConfig = {
      trigger: elements,
    //   markers: true,
    };

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      transition: "opacity ease-out .2s",
      scrollTrigger: scrollConfig,
    });
  });
});
