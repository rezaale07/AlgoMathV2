// Initialize the completion status for all categories and levels
function initCompletedLevels() {
  completedLevels = {};
  Object.keys(questionsData.single).forEach((category) => {
    completedLevels[category] = {
      Easy: false,
      Medium: false,
      Hard: false,
    };
  });
}

// Update the progress dots UI based on level completion status
function updateProgressDots() {
  const dots = dom.levelSelection.querySelectorAll(".progress-dot");
  dots.forEach((dot) => {
    const level = dot.getAttribute("data-level");
    // Reset dot classes
    dot.classList.remove("active", "dot-current", "dot-locked");

    // Set appropriate class based on completion status
    if (completedLevels[selectedCategory][level]) {
      dot.classList.add("active");
    } else if (
      level === "Easy" ||
      (level === "Medium" && completedLevels[selectedCategory].Easy) ||
      (level === "Hard" && completedLevels[selectedCategory].Medium)
    ) {
      dot.classList.add("dot-current");
    } else {
      dot.classList.add("dot-locked");
    }
  });
}

// Handle category selection
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.getAttribute("data-category");
    // Update UI
    dom.categorySelection.style.display = "none";
    dom.levelSelection.style.display = "block";
    document.getElementById(
      "level-title"
    ).textContent = `Pilih Level ${selectedCategory}`;
    // Update game state
    updateLevelButtons();
    updateProgressDots();
  });
});

// Enable/disable level buttons based on progression
function updateLevelButtons() {
  dom.levelSelection.querySelectorAll(".level-btn").forEach((btn) => {
    const level = btn.getAttribute("data-level");
    // Set button state based on level progression
    if (level === "Easy") {
      btn.disabled = false;
    } else if (level === "Medium") {
      btn.disabled = !completedLevels[selectedCategory].Easy;
    } else if (level === "Hard") {
      btn.disabled = !completedLevels[selectedCategory].Medium;
    }
    // Update button opacity
    btn.style.opacity = btn.disabled ? "0.5" : "1";
  });
}
// Handle level button clicks
dom.levelSelection.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.disabled) {
      currentLevel = btn.getAttribute("data-level");
      startSingleGame();
      updateProgressDots();
    }
  });
});

// Initialize and start a single player game
function startSingleGame() {
  // Set game mode and update UI
  gameMode = "single";
  dom.levelSelection.style.display = "none";
  dom.gameContainer.style.display = "block";
  dom.multiplayerHud.style.display = "none";

  // Initialize game state
  singleCurrentIdx = 0;
  singleScore = 0;
  singleLives = gameConfig.single[currentLevel].lives;
  singleTimeLeft = gameConfig.single[currentLevel].timeLimit;

  // Start the game
  showSingleQuestion();
}

// Display the current question and answers
function showSingleQuestion() {
  const questionList = questionsData.single[selectedCategory][currentLevel];

  // Check if all questions are answered
  if (singleCurrentIdx >= questionList.length) {
    return endSingleGame(true);
  }

  // Get current question and update UI
  const curQ = questionList[singleCurrentIdx];
  dom.questionText.innerHTML = curQ.question;
  dom.answerButtons.innerHTML = "";

  // Create answer buttons
  curQ.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans;
    btn.onclick = () => handleSingleAnswer(idx);
    dom.answerButtons.appendChild(btn);
  });

  // Update HUD and start timer if needed
  updateSingleHUD();
  if (currentLevel !== "Easy") {
    startSingleTimer();
  }
}

// Handle player's answer selection
function handleSingleAnswer(idx) {
  clearInterval(timer);
  const questionList = questionsData.single[selectedCategory][currentLevel];
  const curQ = questionList[singleCurrentIdx];

  // Disable answer buttons
  dom.answerButtons
    .querySelectorAll("button")
    .forEach((b) => (b.disabled = true));

  // Process answer
  const isCorrect = idx === curQ.correct;
  if (isCorrect) {
    singleScore += 10;
    audioManager.playSound("correct");
  } else {
    singleLives = Math.max(0, singleLives - 1); // Ensure lives don't go below 0
    audioManager.playSound("wrong");
    // Update HUD immediately after lives change
    updateSingleHUD();

    // End game immediately if no lives left
    if (singleLives <= 0) {
      showFeedback(false, curQ.answers[curQ.correct]).then(() => {
        endSingleGame(false);
      });
      return;
    }
  }

  // Show feedback and proceed to next question
  showFeedback(isCorrect, curQ.answers[curQ.correct]).then(() => {
    singleCurrentIdx++;
    if (singleCurrentIdx >= questionList.length) {
      endSingleGame(true);
    } else {
      showSingleQuestion();
    }
  });
}

// Update the heads-up display (score, lives, timer)
// Start timer for single player game
function startSingleTimer() {
  // Clear any existing timer
  clearInterval(timer);

  // Start new timer
  timer = setInterval(() => {
    singleTimeLeft--;
    updateSingleHUD();

    if (singleTimeLeft <= 0) {
      clearInterval(timer);
      endSingleGame(false);
    }
  }, 1000);
}

function updateSingleHUD() {
  // Update score display
  dom.scoreText.textContent = `Skor: ${singleScore}`;

  // Update lives display with heart emojis
  dom.livesText.innerHTML = "❤️".repeat(singleLives);

  // Update timer display (only for Medium and Hard levels)
  dom.timerText.textContent =
    currentLevel === "Easy" ? "" : `⏱️ ${singleTimeLeft}s`;
}

// Handle game completion (success or failure)
function endSingleGame(success) {
  // Clear any active timer
  clearInterval(timer);

  // Hide game container
  dom.gameContainer.style.display = "none";

  // Check if player passed the level
  const passed = singleScore >= gameConfig.single[currentLevel].minScore;
  completedLevels[selectedCategory][currentLevel] = success && passed;
  updateProgressDots();

  // Create completion screen
  const gameComplete = document.createElement("div");
  gameComplete.className = "game-complete-single";
  gameComplete.innerHTML = `
        <div class="complete-content-single">
            <h2>${success ? "🎉 Level Selesai! 🎉" : "Game Over"}</h2>
            <div class="final-stats">
                <h3>${selectedCategory} - Level ${currentLevel}</h3>
                <div class="score-breakdown">
                    <p><span class="stat-label">Skor Akhir:</span> <span class="stat-value">${singleScore}/100</span></p>
                    <p><span class="stat-label">Soal Dijawab:</span> <span class="stat-value">${singleCurrentIdx}/${
    questionsData.single[selectedCategory][currentLevel].length
  }</span></p>
                    <p><span class="stat-label">Status:</span> <span class="stat-value ${
                      passed ? "pass" : "fail"
                    }">${passed ? "Lulus! 🌟" : "Belum Lulus ⚠️"}</span></p>
                </div>
            </div>
            <div class="action-buttons">
                <button onclick="retrySingleLevel()" class="retry-btn">🔄 Coba Lagi</button>
                ${
                  passed && currentLevel !== "Hard"
                    ? `<button onclick="nextSingleLevel()" class="next-btn">➡️ Level Selanjutnya</button>`
                    : ""
                }
                <button onclick="backMenu()" class="menu-btn">🏠 Menu Utama</button>
            </div>
        </div>
    `;

  // Add completion screen to document
  document.body.appendChild(gameComplete);

  // Show victory effects if passed
  if (success && passed) {
    createConfetti();
  }

  // Play appropriate sound
  audioManager.playSound(success && passed ? "victory" : "gameOver");
}
// Retry current level
window.retrySingleLevel = function () {
  document.querySelector(".game-complete-single")?.remove();
  startSingleGame();
};

// Return to category selection menu
window.backMenu = function () {
  // Remove completion screen if exists
  document.querySelector(".game-complete-single")?.remove();

  // Hide all other screens
  dom.gameContainer.style.display = "none";
  dom.multiplayerHud.style.display = "none";
  dom.levelSelection.style.display = "none";
  dom.startScreen.style.display = "none";

  // Show category selection
  dom.categorySelection.style.display = "block";

  // Clear feedback and reset state
  dom.feedback.textContent = "";
  dom.feedback.className = "";

  // Reset game state
  gameMode = "single";
  currentQuestionIndex = 0;
  singleCurrentIdx = 0;
  singleScore = 0;
};

// Progress to next level
window.nextSingleLevel = function () {
  document.querySelector(".game-complete-single")?.remove();
  const levels = ["Easy", "Medium", "Hard"];
  const idx = levels.indexOf(currentLevel);

  if (idx < levels.length - 1) {
    currentLevel = levels[idx + 1];
    startSingleGame();
    // Reset and start timer for Medium and Hard levels
    if (currentLevel !== "Easy") {
      singleTimeLeft = gameConfig.single[currentLevel].timeLimit;
      startSingleTimer();
    }
  }
};

// Return to category selection
document.getElementById("kekategory").addEventListener("click", function () {
  document.getElementById("level-choice").style.display = "none";
  document.getElementById("category-selection").style.display = "block";
});

// Navigation helper function
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}
