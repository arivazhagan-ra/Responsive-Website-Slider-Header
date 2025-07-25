var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
});

window.addEventListener("load", () => {
  gsap.from(".animate-text", {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: 1.0,
    ease: "power2.out"
  });

  gsap.from(".grid-btn-div", {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: 1.2,
    ease: "power2.out"
  });

  gsap.from(".social-icons-div", {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: 1.4,
    ease: "power2.out"
  });

  gsap.from(".animate-img", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 1.6,
    ease: "back.out(1.7)"
  });

  gsap.from(".clipath", {
    scale: 0,
    opacity: 0,
    duration: 1.4,
    delay: 1.8,
    ease: "power2.out"
  });

  gsap.from(".animate-nav", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });
});
