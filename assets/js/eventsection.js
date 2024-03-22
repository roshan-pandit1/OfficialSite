$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  var interval;

  function startCarousel() {
      interval = setInterval(moveNext, 5000000); // Change slide every 5 seconds
  }

  function moveNext() {
      var next = current + 1;
      setSlide(current, next);
      current = next >= total ? 0 : next;
  }

  function movePrev() {
      var prev = current - 1;
      setSlide(current, prev);
      current = prev < 0 ? total - 1 : prev;
  }

  function setSlide(prev, next) {
      var slide = next >= total ? 0 : next < 0 ? total - 1 : next;
      $('.carousel-item').eq(prev).removeClass('active');
      $('.carousel-item').eq(slide).addClass('active');
  }

  // Start carousel on page load
  startCarousel();

  // Pause carousel on hover
  $('.carousel').on('mouseenter', function() {
      clearInterval(interval);
  }).on('mouseleave', function() {
      startCarousel();
  });

  $('#moveRight').on('click', moveNext);
  $('#moveLeft').on('click', movePrev);
});
