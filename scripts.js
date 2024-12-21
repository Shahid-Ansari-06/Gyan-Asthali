function dynamicTyper(element) {
  const words = element.getAttribute("data-words").split(",");
  const delay = parseInt(element.getAttribute("data-delay")) || 100; 
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
      const currentWord = words[wordIndex];
      let typingSpeed = delay;

      if (isDeleting) {
          charIndex--;
          typingSpeed = delay / 2; 
      } else {
          charIndex++;
      }

      element.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typingSpeed = 1000;
      } 
      else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, typingSpeed);
  }

  type();
}
const typerElement = document.querySelector(".typer");
dynamicTyper(typerElement);

// For Nav Bar
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
document.addEventListener('click', (event) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

   // For Counting
function countUp(elementId, endValue) {
    let count = 0;
    let element = document.getElementById(elementId);
    let firstPart = element.querySelector('.first-part');
    let secondPart = element.querySelector('.second-part');
    
    let interval = setInterval(() => {
      count++;
      firstPart.innerText = Math.floor(count / 10); 
      secondPart.innerText = count % 10;        
  
      if (count >= endValue) clearInterval(interval);
    }, 50); 
  }
  
  window.onload = () => {
    countUp('total-students', 3000);
    countUp('total-teachers', 200); 
    countUp('total-staff', 50);  
  };
  
  // For Slider
  const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider(index) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

setInterval(autoSlide, 7500); 

updateSlider(currentIndex);