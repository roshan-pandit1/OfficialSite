document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    const navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function() {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });