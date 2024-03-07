window.onload = function() {
    var title = document.getElementById("title");
    var text = "Entrepreneurship";
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML = text.substring(0, i+1) + "-Cell";
            i++;
            setTimeout(typeWriter, 150); // writing speed
        } else {
            // Reset after completion
            setTimeout(() => {
                title.innerHTML = "E-Cell";
                i = 0;
                setTimeout(typeWriter, 1000); // Adjust delay before repeating 
            }, 2000); // Adjust delay before collapsing 
        }
    }

    title.innerHTML = "E-Cell";
    typeWriter();
};

//navbar responsive starts
$(document).ready(function() {
    $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

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

// Contact Us form
//for mail
function sendMail() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var topic = document.getElementById("topic").value;
    var message = document.getElementById("message").value;
  
    // Simple validation for the email field
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
    } else {
      document.getElementById("emailError").style.display = "none";
    }
  
    // Check if other fields are empty
    if (name == "") {
      document.getElementById("nameError").innerText = "Please enter your name.";
      document.getElementById("nameError").style.display = "block";
    } else {
      document.getElementById("nameError").style.display = "none";
    }
  
    if (topic == "") {
      document.getElementById("topicError").innerText = "Please enter a subject.";
      document.getElementById("topicError").style.display = "block";
    } else {
      document.getElementById("topicError").style.display = "none";
    }
  
    if (message == "") {
      document.getElementById("messageError").innerText = "Please enter a message.";
      document.getElementById("messageError").style.display = "block";
    } else {
      document.getElementById("messageError").style.display = "none";
    }
  
    // If all fields are valid, send the email
    if (email.match(emailPattern) && name != "" && topic != "" && message != "") {
      // Your existing sendMail code...
      if (!(document.getElementById("topic").value == "")) {
        if (!(document.getElementById("name").value == "")) {
          if (!(document.getElementById("message").value == "")) {
            if (!(document.getElementById("email").value == "")) {
              emailjs.init("PyCeqjfNSfZobc5wp");
              var mails = {
                subject: document.getElementById("topic").value,
                from_name: document.getElementById("name").value,
                message: document.getElementById("message").value,
                from_email: document.getElementById("email").value,
              };
    
              emailjs.send("service_5eyujrj", "template_7cma99q", mails)
                .then(function (re) {
                  document.getElementById('alert').style.display = 'block';
                  confetti();
                  document.getElementById("alert").style.visibility = "visible";
                  document.getElementById("topic").value = "";
                  document.getElementById("name").value = "";
                  document.getElementById("message").value = "";
                  document.getElementById("email").value = "";
                });
            }
          }
        }
      }
    }
}

function closeAlert() {
    // used to check if the function is called or not because it is not working
    // console.log('closeAlert function called'); 
    document.getElementById('alert').style.display = 'none';
  }



  // cursor follower

var xp = 0, mouseX = 0;
var yp = 0, mouseY = 0;
var xpDot = 0, mouseX = 0;
var ypDot = 0, mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX; // Changed from e.pageX
  mouseY = e.clientY; // Changed from e.pageY
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