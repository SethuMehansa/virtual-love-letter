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

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

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
});

//  Close popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});