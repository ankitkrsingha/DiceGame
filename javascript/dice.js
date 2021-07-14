function diceRoll() {
  var diceRoll1 = Math.floor(Math.random() * 6 + 1);
  var diceRoll2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.img1').setAttribute("src", "images/dice" + diceRoll1 + ".png");
  document.querySelector('.img2').setAttribute("src", "images/dice" + diceRoll2 + ".png");
  if (diceRoll1 > diceRoll2 ) {
    document.querySelector('h1').innerText='Player 1 Wins';
  } else if (diceRoll1 === diceRoll2) {
    document.querySelector('h1').innerText='Draw !';
  } else {
    document.querySelector('h1').innerText='Player 2 Wins';
  }
}
