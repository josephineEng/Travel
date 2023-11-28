
$(document).ready(function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = $('.hero-page .slide');
    const dots = $('.hero-page .pagination');
    
    slides.hide();
    dots.empty();

    for (let i = 0; i < slides.length; i++) {
      dots.append('<button class="dot"></button>');
    }

    slides.eq(slideIndex).fadeIn();
    dots.find('button').eq(slideIndex).addClass('active');

    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    setTimeout(showSlides, 3000); // Changes slide every 3 seconds
  }

  $('.hero-page .pagination button').on('click', function() {
    const index = $(this).index();
    slideIndex = index;
    showSlides();
  });


});

