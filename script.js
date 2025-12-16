/* --- QUANTUM ENGINE BOOT --- */

// 1. PRELOADER FADE OUT
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2000); // 2 second fake boot time
});

// 2. REAL-TIME CLOCK (For the HUD)
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// 3. TEXT DECIPHER EFFECT (The "Hacker" Effect)
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

document.querySelectorAll("h1, h2, h3").forEach(header => {
    header.onmouseover = event => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 36)];
                })
                .join("");

            if(iterations >= event.target.dataset.value.length){
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    }
});

// 4. PARTICLES JS: "WARP SPEED" CONFIG
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 1, "random": true },
    "size": { "value": 2, "random": true },
    "line_linked": { "enable": false }, /* No lines, just stars */
    "move": { 
        "enable": true, 
        "speed": 10, /* FAST SPEED */
        "direction": "bottom", /* Moving down/forward */
        "random": false, 
        "straight": false, 
        "out_mode": "out", 
        "bounce": false 
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false },
      "resize": true
    }
  },
  "retina_detect": true
});

// 5. 3D TILT INIT
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});
