// animation.js

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(
          "opacity-0",
          "translate-y-10",
          "scale-95"
        );
        entry.target.classList.add(
          "opacity-100",
          "translate-y-0",
          "scale-100"
        );
      }
    });
  },
  { threshold: 0.15 }
);

// Select big sections & cards
document.querySelectorAll("section, .bg-white, .bg-green-500, .bg-blue-500, .bg-green-100, .bg-blue-400")
  .forEach((el) => {
    el.classList.add(
      "opacity-0",
      "translate-y-10",
      "scale-95",
      "transition-all",
      "duration-700",
      "ease-out"
    );
    observer.observe(el);
  });


/* ===============================
   SCROLL ANIMATION (DOWN & UP)
================================ */

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(
          "opacity-0",
          "translate-y-16",
          "scale-95"
        );
        entry.target.classList.add(
          "opacity-100",
          "translate-y-0",
          "scale-100"
        );
      } else {
        // Re-animate when scrolling up
        entry.target.classList.add(
          "opacity-0",
          "translate-y-16",
          "scale-95"
        );
        entry.target.classList.remove(
          "opacity-100",
          "translate-y-0",
          "scale-100"
        );
      }
    });
  },
  { threshold: 0.15 }
);

// Target large sections & cards
document.querySelectorAll(
  "section, .card, .feature-box, .product-card, .why-card"
).forEach((el) => {
  el.classList.add(
    "transition-all",
    "duration-700",
    "ease-out",
    "opacity-0",
    "translate-y-16",
    "scale-95"
  );
  scrollObserver.observe(el);
});

/* ===============================
   HERO / BANNER AUTOPLAY
================================ */

window.addEventListener("load", () => {
  const heroItems = document.querySelectorAll(".hero-animate");
  let currentIndex = 0;

  // Initialize: hide all except first
  heroItems.forEach((item, index) => {
    item.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition-all",
      "duration-1000",
      "ease-out"
    );
    if (index === 0) {
      item.classList.remove("opacity-0", "translate-y-10");
      item.classList.add("opacity-100", "translate-y-0");
    }
  });

  // Autoplay: cycle through items
  setInterval(() => {
    // Hide current
    heroItems[currentIndex].classList.add("opacity-0", "translate-y-10");
    heroItems[currentIndex].classList.remove("opacity-100", "translate-y-0");

    // Move to next
    currentIndex = (currentIndex + 1) % heroItems.length;

    // Show next
    heroItems[currentIndex].classList.remove("opacity-0", "translate-y-10");
    heroItems[currentIndex].classList.add("opacity-100", "translate-y-0");
  }, 5000); // change every 5s
});
