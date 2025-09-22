document.addEventListener("DOMContentLoaded", () => {
  initCompletedLevels();
  dom.startScreen.style.display = "block";
  dom.categorySelection.style.display = "none";
  dom.levelSelection.style.display = "none";
  dom.gameContainer.style.display = "none";
  dom.multiplayerSetup.style.display = "none";
  dom.multiplayerHud.style.display = "none";
});

// ====== MODE SELECTOR ======
function showScreenWithAnimation(
  hideElement,
  showElement,
  animationClass = "fade"
) {
  // First, start hiding the current screen
  hideElement.classList.add("fade");
  hideElement.classList.remove("visible");

  // After the fade out completes
  setTimeout(() => {
    hideElement.style.display = "none";

    // Setup the new screen
    showElement.style.display = "block";
    showElement.classList.add(animationClass);

    // Trigger reflow to ensure animation plays
    void showElement.offsetHeight;

    // Show the new screen with animation
    showElement.classList.add("visible");
  }, 400);
}

document.getElementById("start-button").addEventListener("click", () => {
  gameMode = "single";
  playerName = document.getElementById("player-name").value.trim();
  playerClass = document.getElementById("player-class").value.trim();
  if (!playerName || !playerClass)
    return showWarning("Mohon isi nama dan kelas terlebih dahulu!");
  showScreenWithAnimation(dom.startScreen, dom.categorySelection, "slide-in");
  document.getElementById("player-display-name").textContent = playerName;
});

document.getElementById("multiplayer-button").addEventListener("click", () => {
  gameMode = "multiplayer";
  showScreenWithAnimation(dom.startScreen, dom.multiplayerSetup, "slide-up");
});

// ====== MUSIC CONTROLS ======
document
  .getElementById("toggle-music")
  .addEventListener("click", () => audioManager.toggleMusic());
document
  .getElementById("volume-slider")
  .addEventListener("input", (e) => audioManager.updateVolume(e.target.value));

// ====== BACK NAVIGATION HANDLERS ======
window.goBack = function () {
  // Determine current screen and handle navigation
  if (dom.multiplayerSetup.style.display === "block") {
    showScreenWithAnimation(dom.multiplayerSetup, dom.startScreen, "slide-in");
  } else if (dom.categorySelection.style.display === "block") {
    showScreenWithAnimation(dom.categorySelection, dom.startScreen, "slide-in");
  }
};

// ====== KEMBALI KE MENU UTAMA (UNTUK KEDUA MODE) ======
window.backToMenu = function () {
  // Find the currently visible screen
  const visibleScreens = [
    dom.gameContainer,
    dom.multiplayerHud,
    dom.levelSelection,
    dom.multiplayerSetup,
    dom.categorySelection,
  ].filter((screen) => screen.style.display === "block");

  // Remove any game complete screens with animation
  document
    .querySelectorAll(".game-complete-single, .game-complete")
    .forEach((screen) => {
      screen.style.opacity = "0";
      setTimeout(() => screen.remove(), 400);
    });

  // If there's a visible screen, animate it out
  if (visibleScreens.length > 0) {
    showScreenWithAnimation(visibleScreens[0], dom.startScreen, "slide-in");
  }

  // Reset game state
  setTimeout(() => {
    dom.feedback.textContent = "";
    dom.feedback.className = "";
    dom.multiplayerHud.style.display = "none";
    gameMode = "single";
    players = [];
    currentPlayerIndex = 0;
    currentQuestionIndex = 0;
  }, 400);
};

// ====== BACK BUTTON HANDLER ======
function handleBackNavigation(currentScreen, previousScreen) {
  showScreenWithAnimation(currentScreen, previousScreen, "slide-in");
}

// Handle back button clicks
document.getElementById("kekategory").addEventListener("click", function () {
  handleBackNavigation(dom.levelSelection, dom.categorySelection);
});

// ====== PROGRESS DOT HANDLER ======
// Fungsi untuk update tampilan progress-dot pada level selection
function updateProgressDots(category) {
  const levels = ["Easy", "Medium", "Hard"];
  levels.forEach((level) => {
    const dot = document.querySelector(`.progress-dot[data-level="${level}"]`);
    if (!dot) return;
    dot.classList.remove("active", "dot-current", "dot-locked");
    // Selesai
    if (completedLevels[category] && completedLevels[category][level]) {
      dot.classList.add("active");
    }
    // Saat ini (belum selesai)
    else if (level === currentLevel) {
      dot.classList.add("dot-current");
    }
    // Belum dicoba/locked
    else {
      dot.classList.add("dot-locked");
    }
  });
}

// Saat memilih kategori, tampilkan dan update progress dot
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    selectedCategory = btn.getAttribute("data-category");
    showScreenWithAnimation(
      dom.categorySelection,
      dom.levelSelection,
      "slide-in"
    );
    updateProgressDots(selectedCategory);
  });
});

// Saat memilih level, pastikan currentLevel di-set dan progress-dot diupdate
document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    currentLevel = btn.getAttribute("data-level");
    updateProgressDots(selectedCategory);
    // ... lanjutkan logic start game singleplayer seperti biasa
  });
});
