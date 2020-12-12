function printscores() {
  var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  scores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("scores");
    olEl.appendChild(liTag);
  });
}

function clearscores() {
  window.localStorage.removeItem("scores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearscores;

printscores();
