const textArray = Array.from(document.querySelectorAll(".animate-text"));

// ----- WITH RECURSIVE-----

function toggleClassSequentially(index) {
  if (index < textArray.length - 1) {
    const CURRENT_ELEMENT = textArray[index];
    const NEXT_ELEMENT = textArray[index + 1];

    setTimeout(() => {
      CURRENT_ELEMENT.classList.toggle("gradient-heading");
      NEXT_ELEMENT.classList.toggle("gradient-heading");
      toggleClassSequentially(index + 1); // Call the function recursively for the next pair
    }, 1000);
  }
}

//toggleClassSequentially(0); // Start the toggling process with the first pair

// ----- WITH setInterval-----

// let index = 0;

// function toggleClassSequentially() {
//   if (index < textArray.length - 1) {
//     const CURRENT_ELEMENT = textArray[index];
//     const NEXT_ELEMENT = textArray[index + 1];

//     CURRENT_ELEMENT.classList.toggle("gradient-heading");
//     NEXT_ELEMENT.classList.toggle("gradient-heading");

//     index++;
//   } else {
//     clearInterval(intervalID);
//   }
// }

// const intervalID = setInterval(toggleClassSequentially, 1000);

// ----- WITH ASYNC AWAIT-----

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function toggleClassSequentially() {
//   for (let i = 0; i < textArray.length - 1; i++) {
//     const CURRENT_ELEMENT = textArray[i];
//     const NEXT_ELEMENT = textArray[i + 1];

//     CURRENT_ELEMENT.classList.toggle("gradient-heading");
//     await delay(1000);
//     NEXT_ELEMENT.classList.toggle("gradient-heading");
//   }
// }

// toggleClassSequentially();

gsap.registerPlugin(ScrollTrigger);

gsap.to("#overview-section", {
  onStart: toggleClassSequentially,
  onStartParams: [0],
  scrollTrigger: {
    trigger: "#overview-section",
    scroller: "body",
  },
});
