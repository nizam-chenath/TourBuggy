// script.js

document.addEventListener('DOMContentLoaded', function () {
  const animatedTextElements = document.querySelectorAll('.animated-text');

  function fadeInElements() {
    animatedTextElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
      }, index * 2000); // Adjust the delay (in milliseconds) as needed
    });
  }

  fadeInElements();
});

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollView = document.querySelector(".gallery")


scrollView.addEventListener("wheel", (event) =>{
  event.preventDefault()
  scrollView.scrollLeft += event.deltaY;
})
scrollView.addEventListener('scroll', () => {
  let index = Math.round(scrollView.scrollLeft / scrollView.offsetWidth);
  updateActiveDot(index);
});

nextBtn.addEventListener("click", () => {
  scrollView.style.scrollBehavior = "smooth";
  let scrollAmount = scrollView.offsetWidth;
  scrollView.scrollLeft += scrollAmount;
});

backBtn.addEventListener("click", () => {
  scrollView.style.scrollBehavior = "smooth";
  let scrollAmount = scrollView.offsetWidth;
  scrollView.scrollLeft -= scrollAmount;
});


// dot nvigation
const images = document.querySelectorAll(".gallery img");
const dotContainer = document.querySelector(".dot-container");

// Create dots
// images.forEach((_, index) => {
//     const dot = document.createElement("span");
//     dot.classList.add("dot");
//     if(index === 0) dot.classList.add("active");
//     dotContainer.appendChild(dot);
// });

// // Update active dot
function updateActiveDot(index) {
    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.remove('active');
    });
    document.querySelectorAll('.dot')[index].classList.add('active');
}

images.forEach((img, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");

  // Click event for each dot
  dot.addEventListener('click', () => {
      scrollView.scrollLeft = img.offsetLeft;
      updateActiveDot(index);
  });

  dotContainer.appendChild(dot);
});

// Ensuring the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const scrollAmount = 300; // This is the distance each button click will scroll
  const scrollContainer = document.querySelector('.cards'); // Adjust if your container has a different class

  document.getElementById('backBtn').addEventListener('click', function() {
      // Scrolls left
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
      // Scrolls right
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});