
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-animation");
    const text = typingElement.textContent;
    typingElement.textContent = "";

    let index = 0;
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }
    type();
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider-container img");
    setInterval(() => {
        images.forEach((img) => {
            const randomRotation = Math.floor(Math.random() * 360);
            const randomScale = Math.random() * 0.5 + 0.75;
            img.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
        });
    }, 3000);
});


document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetHref = this.getAttribute("href");


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


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, 
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
});
