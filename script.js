const pages = [
  "💖My sweetheart,",
  "Every moment with you feels like magic ✨",
  "Your smile brightens even my darkest days 🌞",
  "With every heartbeat, I cherish you more ❤️",
  "I’m grateful for you, today and always 🌹",
  "I really love you so much, more than anything💘",
  "Do you love me too?"
];

let currentPage = 0;
const pageContent = document.getElementById("page-content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const loveQuestion = document.getElementById("love-question");
const heartsContainer = document.querySelector(".hearts-container");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noMoveSound = new Audio("assets/audio/no-btn.mp3");
const yesMoveSound = new Audio("assets/audio/yes-btn.mp3");
const controlsSound = new Audio("assets/audio/click.mp3");


const phrases = [
  "Are you sure? 😏",
  "Think again 😉",
  "You can’t escape my love 💘",
  "Say yes already 😍",
  "Pleaseeee ❤️",
  "No way 😜",
  "Can't catch me 😸",
  "You know you love me 😘"
];

let startedRunning = false;

function updatePage() {
  pageContent.textContent = pages[currentPage];
  controlsSound.play();

  if (currentPage === pages.length - 1) {
    loveQuestion.style.display = "block";
  } else {
    loveQuestion.style.display = "none";
  }
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

// No button running away
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  if (!startedRunning) {
    startedRunning = true;
  }

  // Change text after first attempt
  if (startedRunning) {
    noBtn.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    noMoveSound.play();
  }

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Use full window instead of container
  const newX = Math.random() * (window.innerWidth - btnWidth);
  const newY = Math.random() * (window.innerHeight - btnHeight);

  noBtn.style.position = "fixed"; // so it can move freely on screen
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Initialize
updatePage();

// Show popup on "Yes"
yesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  yesMoveSound.play();
  startHeartRain();

});

//  Close popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
  heartsContainer.innerHTML = "";
});

// Function to create heart elements
function startHeartRain() {
  const numberOfHearts = 200; // adjust for more/less hearts

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "🤍";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";

    // Random size
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";

    heart.style.animationDuration ="20s";

    // Random delay
    const delay = Math.random() * 2;
    heart.style.animationDelay = delay + "s";

    heartsContainer.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}