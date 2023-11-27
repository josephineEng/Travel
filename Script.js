const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

let currentSlide = 0;
let autoSlide = setInterval(nextSlide, 5000); // Change slide every 5 seconds

slides.forEach((slide, index) => {
  const bullet = document.createElement('button');
  bullet.classList.add('bullet');
  if (index === 0) {
    bullet.classList.add('active');
  }
  bullet.addEventListener('click', () => {
    goToSlide(index);
  });
  pagination.appendChild(bullet);
});

function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.opacity = 0;
    const bullets = document.querySelectorAll('.bullet');
    bullets[index].classList.remove('active');
  });
  slides[slideIndex].style.opacity = 1;
  bullets[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

