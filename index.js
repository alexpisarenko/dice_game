// function getRandomNum() {
//   return Math.floor(Math.random() * 6 + 1);
// }

function getRandomNum() {
  return Math.floor(Math.random() * 6 + 1);
}

function getRandomDiceImage() {
  var player1 = getRandomNum();
  var player2 = getRandomNum();
  document
    .querySelector(".dice .img1")
    .setAttribute("src", `images/dice${player1}.png`);

  document
    .querySelector(".dice .img2")
    .setAttribute("src", `images/dice${player2}.png`);

  if (player1 > player2) {
    document.querySelector(
      ".container h1"
    ).innerHTML = `Player 1 wins! <i class="fa-solid fa-flag"></i>`;
  } else if (player1 === player2) {
    document.querySelector(".container h1").innerHTML = "It's a Tie!";
  } else {
    document.querySelector(
      ".container h1"
    ).innerHTML = `Player 2 wins! <i class="fa-solid fa-flag"></i>`;
  }
}

getRandomDiceImage();
