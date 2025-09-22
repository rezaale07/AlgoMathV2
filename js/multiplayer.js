// ====== RESPONSIVE PLAYER INPUTS (MULTIPLAYER) ======
function updatePlayerInputs(count) {
  dom.playerNames.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const playerCard = document.createElement("div");
    playerCard.className = "player-card";
    playerCard.innerHTML = `<h4>Pemain ${i + 1}</h4>
    <input type="text" class="player-input" placeholder="Masukkan nama pemain ${
      i + 1
    }" required>`;
    dom.playerNames.appendChild(playerCard);
  }
}
document.addEventListener("DOMContentLoaded", () => updatePlayerInputs(2));

// ====== INCREMENT/DECREMENT PLAYER ======
document.getElementById("player-inc").addEventListener("click", () => {
  let count = parseInt(dom.playerCount.textContent);
  if (count < 4) {
    dom.playerCount.textContent = count + 1;
    updatePlayerInputs(count + 1);
  }
});
document.getElementById("player-dec").addEventListener("click", () => {
  let count = parseInt(dom.playerCount.textContent);
  if (count > 2) {
    dom.playerCount.textContent = count - 1;
    updatePlayerInputs(count - 1);
  }
});

// ====== MULTIPLAYER DIFFICULTY ======
document.querySelectorAll(".diff-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document
      .querySelectorAll(".diff-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// ====== MULTIPLAYER MULAI ======
document
  .getElementById("start-multiplayer-btn")
  .addEventListener("click", startMultiplayerGame);
function startMultiplayerGame() {
  const difficultyBtn = document.querySelector(".diff-btn.active");
  if (!difficultyBtn)
    return showWarning("Pilih tingkat kesulitan terlebih dahulu!");
  multiplayerLevel = difficultyBtn.dataset.difficulty;
  multiplayerCategory = document.getElementById("multiplayer-category").value;
  let playerInputs = dom.playerNames.querySelectorAll(".player-input");
  let tempPlayers = [];
  let allValid = true;
  playerInputs.forEach((input, i) => {
    const name = input.value.trim();
    if (!name) {
      input.classList.add("error");
      allValid = false;
    } else {
      input.classList.remove("error");
      tempPlayers.push({
        name,
        score: 0,
        lives: gameConfig.multiplayer[multiplayerLevel].lives,
        questionsAnswered: 0,
        questionsLeft: 5, // ✅ setiap pemain punya 5 soal
      });
    }
  });

  if (!allValid) return showWarning("Semua pemain harus memiliki nama!");
  gameMode = "multiplayer";
  players = tempPlayers;
  currentPlayerIndex = 0;
  multiplayerQuestions =
    questionsData.multiplayer[multiplayerCategory][multiplayerLevel];
  multiplayerQuestions =
    questionsData.multiplayer[multiplayerCategory][multiplayerLevel];

  // ✅ Batasi jumlah soal: tiap pemain 5 soal
  const playerCount = players.length;
  const maxQuestions = playerCount * 5;
  multiplayerQuestions = multiplayerQuestions.slice(0, maxQuestions);

  dom.multiplayerSetup.style.display = "none";
  dom.multiplayerHud.style.display = "flex";
  dom.gameContainer.style.display = "block";
  currentQuestionIndex = 0;
  showMultiplayerQuestion();
}

function showMultiplayerQuestion() {
  if (
    !multiplayerQuestions ||
    currentQuestionIndex >= multiplayerQuestions.length
  )
    return endMultiplayerGame();
  const curQ = multiplayerQuestions[currentQuestionIndex];
  const curPlayer = players[currentPlayerIndex];
  dom.questionText.innerHTML = `<div class="current-player">Giliran: <b>${curPlayer.name}</b></div>
    <div class="question-text">${curQ.question}</div>`;
  dom.answerButtons.innerHTML = "";
  curQ.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans;
    btn.onclick = () => checkMultiplayerAnswer(idx);
    dom.answerButtons.appendChild(btn);
  });
  updateMultiplayerHUD();
  if (multiplayerLevel !== "easy") startMultiplayerTimer();
}
function checkMultiplayerAnswer(idx) {
  // Clear timer if exists
  if (window.multiplayerTimer) clearInterval(window.multiplayerTimer);

  const curQ = multiplayerQuestions[currentQuestionIndex];
  const curPlayer = players[currentPlayerIndex];

  // Disable all answer buttons
  dom.answerButtons
    .querySelectorAll("button")
    .forEach((b) => (b.disabled = true));

  // Check if answer is correct
  const isCorrect = idx === curQ.correct;
  if (isCorrect) {
    // Add score for correct answer
    const scoreToAdd = 10;
    curPlayer.score += scoreToAdd;
    audioManager.playSound("correct");

    // Show score animation
    const scorePopup = document.createElement("div");
    scorePopup.className = "score-popup";
    scorePopup.textContent = `+${scoreToAdd}`;
    document.querySelector(".question-container").appendChild(scorePopup);
    setTimeout(() => scorePopup.remove(), 1000);
  } else {
    curPlayer.lives--;
    audioManager.playSound("wrong");
  }

  // Update question counters
  curPlayer.questionsAnswered++;
  curPlayer.questionsLeft--; // Kurangi jatah soal pemain

  // Update HUD immediately to show new score
  updateMultiplayerHUD();

  showFeedback(isCorrect, curQ.answers[curQ.correct]).then(() => {
    currentQuestionIndex++;

    // ✅ habis total soal di bank → game selesai
    if (currentQuestionIndex >= multiplayerQuestions.length) {
      return endMultiplayerGame();
    }

    // ✅ kalau player ini sudah habis nyawa atau habis jatah soal
    if (curPlayer.lives <= 0 || curPlayer.questionsLeft <= 0) {
      // cek apakah masih ada player yang punya soal tersisa
      if (players.every((p) => p.questionsLeft <= 0 || p.lives <= 0)) {
        return endMultiplayerGame();
      }
      return switchPlayerMultiplayer();
    }

    // ✅ kalau masih ada jatah, tetap giliran dia
    showMultiplayerQuestion();
  });
}
function switchPlayerMultiplayer() {
  let tries = 0,
    found = false;
  let totalPlayers = players.length;
  while (!found && tries < totalPlayers) {
    currentPlayerIndex = (currentPlayerIndex + 1) % totalPlayers;
    if (
      players[currentPlayerIndex].lives > 0 &&
      players[currentPlayerIndex].questionsLeft > 0
    ) {
      found = true;
    }
    tries++;
  }
  if (found) {
    setTimeout(() => showMultiplayerQuestion(), 800);
  } else {
    endMultiplayerGame();
  }
}
function updateMultiplayerHUD() {
  dom.multiplayerHud.innerHTML =
    players
      .map(
        (p, i) =>
          `<div class="player-stats-card${
            i === currentPlayerIndex ? " active" : ""
          }">
      <h3>${p.name} ${i === currentPlayerIndex ? "(Bermain)" : ""}</h3>
      <p>Skor: ${p.score}</p>
      <p>Nyawa: ${"❤️".repeat(p.lives)}</p>
    </div>`
      )
      .join("") +
    `<div class="game-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${
          (currentQuestionIndex / multiplayerQuestions.length) * 100
        }%"></div>
      </div>
      <span>Soal ${currentQuestionIndex + 1}/${
      multiplayerQuestions.length
    }</span>
    </div>`;

  // ✅ Tambahin ini aja, biar area tengah (lingkaran biru) jadi nama pemain
  document.getElementById(
    "lives"
  ).textContent = `Giliran: ${players[currentPlayerIndex].name}`;
}

function endMultiplayerGame() {
  if (window.multiplayerTimer) {
    clearInterval(window.multiplayerTimer);
  }
  const winner = players.reduce((prev, cur) =>
    cur.score > prev.score ? cur : prev
  );
  const ranking = players.slice().sort((a, b) => b.score - a.score);

  const gameComplete = document.createElement("div");
  gameComplete.className = "game-complete";

  gameComplete.innerHTML = `
    <div class="complete-content">
      <h2>🎉 Permainan Multiplayer Selesai! 🎉</h2>
      <div class="winner-announcement">
        <span class="avatar-circle">${winner.name[0].toUpperCase()}</span>
        <span class="winner-label">Juara</span>
        <span class="winner-name">${winner.name}</span>
        <span class="winner-score">Skor: ${winner.score}</span>
        <span class="badge-winner">🏆</span>
      </div>
      <div class="multiplayer-table-container">
        <table class="multiplayer-score-table">
          <thead>
            <tr>
              <th>Peringkat</th>
              <th>Pemain</th>
              <th>Skor</th>
              <th>Benar</th>
              <th>Nyawa</th>
            </tr>
          </thead>
          <tbody>
            ${ranking
              .map(
                (p, i) => `
              <tr class="${p === winner ? "winner-row" : ""}${
                  p.lives <= 0 ? " eliminated-row" : ""
                }">
                <td>${i + 1}</td>
                <td>
                  ${p.name}
                  ${p === winner ? '<span class="badge-winner"> 🏆</span>' : ""}
                </td>
                <td>${p.score}</td>
                <td>${p.questionsAnswered || 0}</td>
                <td>${"❤️".repeat(p.lives)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="action-buttons">
        <button onclick="location.reload()" class="retry-btn">Main Lagi</button>
      </div>
    </div>
  `;
  document.body.appendChild(gameComplete);
  dom.gameContainer.style.display = "none";
  if (winner.score >= 30) createConfetti(), audioManager.playSound("victory");
  else audioManager.playSound("gameOver");
}
// Tambahkan di bagian bawah file
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}
