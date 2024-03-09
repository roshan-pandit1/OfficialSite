  // cursor follower
  var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX; 
    mouseY = e.clientY; 
  });

setInterval(function () {
  xp += (mouseX - xp) / 15;
  yp += (mouseY - yp) / 15;

  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp + "px";
}, 20);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 25;
  ypDot += (mouseY - ypDot) / 25;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 20);


//navbar responsive starts
$(document).ready(function() {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // if (window.scrollY > 60) {
    //     document.querySelector('#scroll-top').classList.add('active');
    // } else {
    //     document.querySelector('#scroll-top').classList.remove('active');
    // }

    // scroll spy
    $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if (top > offset && top < offset + height) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    });
});

// smooth scrolling
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear')
});

});
//navbar responsive ends
