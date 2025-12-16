// 1. TYPING EFFECT
const textElement = document.getElementById('typing-text');
const texts = ["Bridging Healthcare & Technology", "Operations Manager", "IT Strategy & Compliance"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 80);
    }
})();

// 2. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. CUSTOM MOUSE CURSOR (Desktop Only)
if (window.matchMedia("(min-width: 768px)").matches) {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function(e){
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
}

// 4. PARTICLES JS CONFIGURATION (Slow & Subtle)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#45a29e" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#45a29e", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } }
    }
  },
  "retina_detect": true
});

// 5. CLICK TO EXPAND CARDS
const overlay = document.getElementById('overlay');
const expandableCards = document.querySelectorAll('#experience .card, #skills .skill-category');

expandableCards.forEach(card => {
    card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        
        if (!isExpanded) {
            // Remove tilt to allow proper centering
            if (card.vanillaTilt) {
                card.vanillaTilt.destroy();
            }
            card.classList.add('expanded');
            overlay.classList.add('active');

            // Add Close Button if not present
            if (!card.querySelector('.close-btn')) {
                const closeBtn = document.createElement('i');
                closeBtn.classList.add('fas', 'fa-times', 'close-btn');
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeCard(card);
                });
                card.prepend(closeBtn);
            }
        }
    });
});

overlay.addEventListener('click', () => {
    const activeCard = document.querySelector('.expanded');
    if (activeCard) {
        closeCard(activeCard);
    }
});

function closeCard(card) {
    card.classList.remove('expanded');
    overlay.classList.remove('active');
    
    // Re-enable 3D Tilt after closing
    VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
}
