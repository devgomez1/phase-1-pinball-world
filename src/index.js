fetch("http://localhost:3000/games")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderDetails(data[0]);
    data.forEach(renderGames);
  });

function renderGames(game) {
  let gameContanier = document.querySelector(".game-list");
  let title = document.createElement("h5");
  title.textContent = `${game.name}: ${game.manufacturer_name}`;

  gameContanier.append(title);

  title.addEventListener("click", function () {
    renderDetails(game);
  });
}

function renderDetails(game) {
  let image = document.getElementById("detail-image");
  image.src = game.image;

  let title = document.getElementById("detail-title");
  title.textContent = game.name;

  let score = document.getElementById("detail-high-score");
  score.textContent = game.high_score;
}

let form = document.getElementById("high-score-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = document.getElementById("detail-high-score");
  let playerScore = e.target["score-input"].value;
  score.textContent = playerScore;
});
