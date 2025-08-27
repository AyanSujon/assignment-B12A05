// Navbar Heart Icons Functionalities // 

// Navbar heart counter ( inside .heart-icon > #heart-icon-count")
const heartCounter = document.getElementById("heart-icon-count");

// Select all card heart icons (inside .card > div > #card-heart-icon)
const heartIcons = document.querySelectorAll("#card-heart-icon");

// Loop with for-of
for (const icon of heartIcons) {
  icon.addEventListener("click", function() {
let heartCounterConverted = parseInt(heartCounter.innerText);
    heartCounter.innerText = heartCounterConverted + 1;
  });
}

// Card Call Buttons Functionalities



