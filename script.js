// ================================
// CAREERSEEKHO WEBSITE JAVASCRIPT
// ================================

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("mobile-active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}


// CLOSE MOBILE MENU AFTER CLICKING A LINK
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("mobile-active");
    }

    const icon = menuBtn?.querySelector("i");

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});


// ACTIVE NAVIGATION LINK ON SCROLL
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    const href = item.getAttribute("href");

    if (href === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});


// NAVBAR SHADOW ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".topic-card, .video-card, .section-heading, .alku-section"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// OPTIONAL: SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});