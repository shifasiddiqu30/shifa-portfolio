/* =====================================================
   MOBILE NAVBAR
===================================================== */

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Java Programmer",
    "Computer Engineering Student",
    "Aspiring Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    }


    let speed = isDeleting ? 60 : 100;


    /* When word is completely typed */

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1500;

        isDeleting = true;

    }


    /* When word is completely deleted */

    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;

        }

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}

typeEffect();



/* =====================================================
   ACTIVE NAVBAR ON SCROLL
===================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

});


/* Initial state */

backToTop.style.opacity = "0";
backToTop.style.pointerEvents = "none";



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .timeline-item, .certificate-card, .contact-container"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});