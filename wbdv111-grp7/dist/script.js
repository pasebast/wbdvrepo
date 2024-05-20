// Tiny Slider
var slider = tns({
  container: ".slider",
  items: 1, // Set the number of items per slide to 1
  speed: 500,
  mouseDrag: true,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 2000, // Autoplay interval in milliseconds
  center: true,
  loop: true,
  nav: false,
  controlsContainer: "#custom-control",
  controlsPosition: "bottom",
});

// ScrollReveal JS
ScrollReveal({ distance: "30px", easing: "ease-in" });

ScrollReveal().reveal(".title", {
  delay: 300,
  origin: "top",
});

ScrollReveal().reveal(".paragraph", {
  delay: 800,
  origin: "top",
});

ScrollReveal().reveal("#form", {
  delay: 1200,
  origin: "bottom",
});

// Form
const emailId = document.getElementById("email-id");
const error = document.getElementById("error");
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

emailId.addEventListener("input", (e) => {
  const emailInputValue = e.currentTarget.value;
  if (!mailRegex.test(emailInputValue)) {
    emailId.style.outline = "2px dotted rgb(117, 152, 242)";
  } else {
    emailId.style.outline = "2px dotted rgb(118, 167, 63)";
  }
});

function checkEmpty() {
  if (emailId.value == "") {
    emailId.style.outline = "none";
  }
}

form.addEventListener("submit", (e) => {
  if (emailId.value.match(mailRegex)) {
    e.preventDefault();
    form.innerHTML = `<p style="font-size: 2rem; font-weight: 500; color: rgb(118, 167, 63);">Subscribed! 🎉</p>`;
    setTimeout(() => {
      window.location.href = "#card-container";
    }, 1700);
  } else {
    e.preventDefault();
    alert("Oops! Please check your email");
  }
});

let i = 0;
let placeholder = "";
const txt = "example@domain.com";
const speed = 150;

setTimeout(() => {
  type();
}, 1600);

function type() {
  placeholder += txt.charAt(i);
  emailId.setAttribute("placeholder", placeholder);
  i++;
  setTimeout(type, speed);
}



