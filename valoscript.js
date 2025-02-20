// document.addEventListener("scroll", function () {
//     let scrollPos = window.scrollY;
    
//     document.getElementById("background").style.transform = `translateY(${scrollPos * 0.3}px)`;
//     document.getElementById("foreground").style.transform = `translateY(${scrollPos * 0.15}px)`;
// });
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Samyoga Fest!");

    // Add a class when scrolling to change header background
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Fade-in animation when scrolling
    const fadeInElements = document.querySelectorAll(".fade-in");

    const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeInElements.forEach(element => {
        scrollObserver.observe(element);
    });
});
// Countdown Timer Script
function startCountdown() {
    const eventDate = new Date("Feb 24, 2025 00:00:00").getTime();

    setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

// Start countdown on page load
window.onload = startCountdown;
