// Dark Theme Toggle
const themeSwitch = document.getElementById('switch');

// Load the theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
});

// Apply theme based on the switch
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Hide/Reveal on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});


// Slider Functionality
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
let index = 0;

function showSlide(n) {
    const totalSlides = document.querySelectorAll('.slide').length;
    if (n >= totalSlides) index = 0;
    else if (n < 0) index = totalSlides - 1;
    else index = n;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

// Auto-slide functionality (optional)
setInterval(() => showSlide(index + 1), 5000); // Change slide every 5 seconds

