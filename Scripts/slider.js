gsap.registerPlugin(ScrollTrigger);

gsap.to("#g-carousel>div", {
  x: "-100%",
  duration: 5,
  scrollTrigger: {
    trigger: "#ft-slider",
    scroller: "body",
    pin: true,
    scrub: true,
    // markers: true,
    start: 'top -1%',
    end: 'top -250%'
  },
});
