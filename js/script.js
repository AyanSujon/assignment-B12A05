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

// Select coin count element
const coinIconCount = document.getElementById("coin-icon-count");

// Select all call buttons
const callButtons = document.querySelectorAll("#call-btn");

// Select call history container
const callHistoryList = document.querySelector(".call-history-list");

// select current time in hh:mm:ss AM/PM
let now = new Date();
let time = now.toLocaleTimeString("en-US", { hour12: true });

// Loop through each call button
for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    let coins = parseInt(coinIconCount.innerText);

    // Check if enough coins
    if (coins < 20) {
      alert("Insufficient coins! You need at least 20 coins to make a call.");
      return;
    }

    // Deduct 20 coins
    coins -= 20;
    coinIconCount.innerText = coins;

    // Get service name and number from the card
    const card = btn.closest(".card"); 
    const serviceName = card.querySelector("#service-name").innerText;
    const serviceNumber = card.querySelector("#card-number").innerText;

    // Show alert when a call button clicked 
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to Call History
    const historyItem = document.createElement("div");
    historyItem.classList.add("call-history");
    historyItem.innerHTML = `
      <div class="flex justify-between items-center bg-[#FAFAFA] rounded-lg p-4">
        <div>
          <h6 class="inter-font font-semibold text-sm text-[#111111]">${serviceName}</h6>
          <p class="hind-madurai-font text-lg text-[#5C5C5C]">${serviceNumber}</p>
        </div>
        <div>
          <p class="hind-madurai-font text-sm text-[#111111]">${time}</p>
        </div>
      </div>
    `;
    callHistoryList.prepend(historyItem); // newest call on top (instead of .append() Methord) 
  });
}


// Clear History button Functionalities

const clearHistoryBtn = document.getElementById("clear-history-btn");

clearHistoryBtn.addEventListener("click", function() {
  // Remove all children inside callHistoryList
  callHistoryList.innerHTML = "";
});


// Copy button Functionalities 
const copyButtons = document.querySelectorAll("#copy-btn");

// Loop through each button
for (const btn of copyButtons) {
  btn.addEventListener("click", function() {
    // Find the closest card 
    const card = btn.closest(".card");
    const cardNumber = card.querySelector("#card-number").innerText;

    // Copy the text to clipboard
    navigator.clipboard.writeText(cardNumber)
      .then(() => {
        alert(`Copied: ${cardNumber}`);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
}
