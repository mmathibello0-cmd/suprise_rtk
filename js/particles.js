// =====================================
// Floating Gold Particles
// =====================================

const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    particle.style.width =
        (4 + Math.random() * 8) + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 14000);

}

// Create particles continuously
setInterval(createParticle, 180);
