var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
showSlides();

function showSlides() {
  var i;

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

// Event listener for next button
document.querySelector('.next').addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Go back to the first slide if at the end
  }
  showSlides();
});

// Event listener for previous button
document.querySelector('.prev').addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go to the last slide if at the beginning
  }
  showSlides();
});
