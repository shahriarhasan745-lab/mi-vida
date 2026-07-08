// 1. Custom Glowing Cursor Logic
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2
    });
});

// 2. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// 3. Simple Background Music Controller
const audio = new Audio('music.mp3'); // আপনার মিউজিক ফাইল
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Pause Music 🎵";
    } else {
        audio.pause();
        musicBtn.innerText = "Play Music 🎵";
    }
});

// 4. Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    let scrollPos = window.scrollY;
    hero.style.backgroundPositionY = -(scrollPos * 0.5) + "px";
});
