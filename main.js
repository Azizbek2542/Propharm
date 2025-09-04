const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 800,
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-container');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});


const hamburger = document.getElementById('hamburger');
function toggleMenu() {
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);

hamburger.addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'grid') {
        sidebar.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        sidebar.style.display = 'grid';
        document.body.style.overflow = 'hidden';
    }
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener("click", () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
        document.body.style.overflow = 'auto';
        hamburger.classList.remove('active');
    });
});

  window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const headerBlock = document.querySelector(".header-block");

    if (navbar && headerBlock) {
      const navHeight = navbar.offsetHeight;
      headerBlock.style.paddingTop = navHeight + "px";
    }
  });


let dni = document.querySelector('#days');
let chasyi = document.querySelector("#hours");
let minuta = document.querySelector("#minutes");
let sekund = document.querySelector("#seconds");

let startTime = localStorage.getItem("timerStart");
let duration = (71 * 24 * 60 * 60) + (19 * 60 * 60) + (59 * 60) + 57;

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("timerStart", startTime);
}

function updateTimer() {
    let now = Date.now();
    let elapsed = Math.floor((now - startTime) / 1000);
    let remaining = duration - elapsed;

    if (remaining <= 0) {
        dni.textContent = "0";
        chasyi.textContent = "0";
        minuta.textContent = "0";
        sekund.textContent = "0";
        return;
    }

    let days = Math.floor(remaining / (24 * 60 * 60));
    let hours = Math.floor((remaining % (24 * 60 * 60)) / 3600);
    let minutes = Math.floor((remaining % 3600) / 60);
    let seconds = remaining % 60;

    dni.textContent = days;
    chasyi.textContent = hours;
    minuta.textContent = minutes;
    sekund.textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();


document.querySelector('.pause-btn').addEventListener('click', () => {
    document.querySelector('.slider-track').style.animationPlayState = 'paused';
});

document.querySelector('.play-btn').addEventListener('click', () => {
    document.querySelector('.slider-track').style.animationPlayState = 'running';
});

