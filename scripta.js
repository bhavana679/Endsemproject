// Typing Animation
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-animation");
    const text = typingElement.textContent;
    typingElement.textContent = "";

    let index = 0;
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }
    type();
});

// Image Shuffle (Random Rotation Effect)
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider-container img");
    setInterval(() => {
        images.forEach((img) => {
            const randomRotation = Math.floor(Math.random() * 360);
            const randomScale = Math.random() * 0.5 + 0.75; // Scale between 0.75 and 1.25
            img.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
        });
    }, 3000); // Adjust shuffle interval here
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetHref = this.getAttribute("href");

        // Only apply smooth scrolling if the link points to a section on the same page
        if (targetHref.startsWith("#")) {
            event.preventDefault();
            const targetSection = document.querySelector(targetHref);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    });
});

// Scroll Animation for About Section
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the section is visible
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Additional Scroll Detection Logic
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the section is in the viewport, add the 'visible' class
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
});
