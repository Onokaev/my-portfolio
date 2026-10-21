const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = navigation.querySelectorAll("a");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.style.overflow = "";
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation.classList.toggle("is-open", willOpen);
  document.body.style.overflow = willOpen ? "hidden" : "";
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const destination = new URL(link.href);
    const isSamePageAnchor =
      destination.origin === window.location.origin &&
      destination.pathname === window.location.pathname &&
      destination.hash;

    if (!isSamePageAnchor) {
      closeMenu();
      return;
    }

    const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();
    history.pushState(null, "", destination.hash);
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

document.getElementById("year").textContent = new Date().getFullYear();
