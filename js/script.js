/*===== menu icon navbar ====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*===== scroll sections active link ====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /*===== sticky navbar ====*/
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*===== remove menu icon navbar when click navbar link (scroll) ====*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*===== swiper ====*/
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 50,
   loop: true,
   grabCursor: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

/*===== dark light mode ====*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

// Enable dark mode by default
document.body.classList.add('dark-mode');

 /*===== scroll reveal ====*/
ScrollReveal({ 
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right'});

// form email
// Get references to the form and input fields
const form = document.getElementById("contactForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Function to send email
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mannasagnik85@gmail.com",
        Password: "4CF24463216718AAC121C7EAEE556FC69952", // Use environment variables for sensitive data
        To: 'mannasagnik85@gmail.com',
        From: "mannasagnik85@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        response => {
            if (response === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Message could not be sent.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        Swal.fire({
            title: "Error!",
            text: "An error occurred while sending the message.",
            icon: "error"
        });
    });
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation
    if (fullName.value === "" || email.value === "" || phone.value === "" || message.value === "") {
        Swal.fire({
            title: "Error!",
            text: "Please fill in all required fields.",
            icon: "error"
        });
        return;
    }

    // Send email
    sendEmail();

    // Reset form
    form.reset();
});