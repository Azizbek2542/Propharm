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



let deadline = new Date("2025-12-01T00:00:00").getTime(); 
let timerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="17" cy="17" r="14" fill="#00acc1"/><circle cx="17" cy="17" r="11" fill="#eee"/><path d="M16 8h2v9h-2z"/><path d="m22.655 20.954l-1.697 1.697l-4.808-4.807l1.697-1.697z"/><circle cx="17" cy="17" r="2"/><circle cx="17" cy="17" r="1" fill="#00acc1"/><path fill="#ffc107" d="m11.9 42l14.4-24.1c.8-1.3 2.7-1.3 3.4 0L44.1 42c.8 1.3-.2 3-1.7 3H13.6c-1.5 0-2.5-1.7-1.7-3"/><path fill="#263238" d="M26.4 39.9c0-.2 0-.4.1-.6s.2-.3.3-.5s.3-.2.5-.3s.4-.1.6-.1s.5 0 .7.1s.4.2.5.3s.2.3.3.5s.1.4.1.6s0 .4-.1.6s-.2.3-.3.5s-.3.2-.5.3s-.4.1-.7.1s-.5 0-.6-.1s-.4-.2-.5-.3s-.2-.3-.3-.5s-.1-.4-.1-.6m2.8-3.1h-2.3l-.4-9.8h3z"/></svg>`

function vremya() {
  let now = new Date().getTime();
  let diff = deadline - now;

  if (diff <= 0) {
    clearInterval(timer);

    document.querySelector(".Timer-prnt").innerHTML = `<h2>Deal Expired ${timerSvg}</h2>`;
    document.querySelector(".deal-text h2:nth-child(2)").textContent = "$35.00";
    document.querySelector(".deal-text:nth-child(2) h2:nth-child(2)").textContent = "$32.88";

    document.querySelectorAll('.sale-word').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.disabled').forEach(el => {
      el.style.visibility = 'hidden';
      el.style.opacity = '1';
    });
    document.querySelectorAll('.line-through').forEach(el => {
      el.style.visibility = 'visible'
      el.style.display = 'inline'
      el.style.textDecoration = 'none';
      el.style.color = '#184363';
    });
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  let daysBox = document.getElementById("days-box");
  let hoursBox = document.getElementById("hours-box");
  let minutesBox = document.getElementById("minutes-box");
  let secondsBox = document.getElementById("seconds-box");
  
  
  if (days > 0) {
    daysBox.style.display = "inline-flex";
    document.getElementById("days").textContent = days;
  } else {
    daysBox.style.display = "none";
  }
  
  if (days <= 0 && hours > 0) {
    hoursBox.style.display = "inline-flex";
    document.getElementById("hours").textContent = hours;
  } else if (days > 0) {
    document.getElementById("hours").textContent = hours;
  } else {
    hoursBox.style.display = "none";
  }
  
  if (days <= 0 && hours <= 0 && minutes > 0) {
    minutesBox.style.display = "inline-flex";
    document.getElementById("minutes").textContent = minutes;
  } else if (days > 0 || hours > 0) {
    document.getElementById("minutes").textContent = minutes;
  } else {
    minutesBox.style.display = "none";
  }
  
  if (diff > 0) {
    secondsBox.style.display = "inline-flex";
    document.getElementById("seconds").textContent = seconds;
  } else {
    secondsBox.style.display = "none";
  }
}

let timer = setInterval(vremya, 1000);
vremya();




document.querySelector('.pause-btn').addEventListener('click', () => {
    document.querySelector('.slider-track').style.animationPlayState = 'paused';
});

document.querySelector('.play-btn').addEventListener('click', () => {
    document.querySelector('.slider-track').style.animationPlayState = 'running';
});



