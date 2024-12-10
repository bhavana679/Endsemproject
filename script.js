
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
        alert('Thank you for your message!');
        e.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
   
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

setInterval(showSlides, 3000);
showSlides();
