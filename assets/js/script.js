document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        // Move layers at different speeds
        document.getElementById("layer1").style.transform = `translateY(${scrollPosition * 0.4}px) rotate(${scrollPosition * 0.05}deg) scale(${1 + scrollPosition * 0.0003})`;
        document.getElementById("layer2").style.transform = `translateY(${scrollPosition * 0.3}px) rotate(${scrollPosition * -0.03}deg) scale(${1 + scrollPosition * 0.0002})`;
        document.getElementById("layer3").style.transform = `translateY(${scrollPosition * 0.2}px) scale(${1 + scrollPosition * 0.0001})`;

        // Add opacity effect for fading in/out
        document.getElementById("layer1").style.opacity = `${1 - scrollPosition * 0.001}`;
        document.getElementById("layer2").style.opacity = `${1 - scrollPosition * 0.0008}`;
    });
});
