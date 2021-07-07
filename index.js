// Element
var teamOneImage = document.getElementById("team1");
var teamTwoImage = document.getElementById("team2");
var result = document.getElementById("result");

// Scores
var scores = [0, 1, 2, 3, 4, 5];

// Generate randomize value
var max = scores.length;
function findRandom() {
  return Math.floor(Math.random() * max); //Finds number between 0 - max
}
// team1 score
var team1guess = findRandom();
// team2 score
var team2guess = findRandom();

//VARIABLES - Team names
var teamOneName = "Berlin";
var teamTwoName = "Munich";

// Game Logic
if (team1guess > team2guess) {
  // Team one won
  result.textContent = `${teamOneName} wins , Kawser will be happy`;
  result.style.color = "#2f74df";

} else if (team1guess < team2guess) {
   // Team two won
  result.textContent = `${teamTwoName}  wins ,  Kawser will be sad`;
  result.style.color = "#f419c8";

} else {
 // draw!
  result.textContent = `Draw! No winner this time`;
  result.style.color = "orange";
}

// RENDER ON DOM
// image
teamOneImage.setAttribute("src", `images/${team1guess}.png`);
teamTwoImage.setAttribute("src", `images/${team2guess}.png`);
// team names in dom
document.getElementById("team1Name").textContent = teamOneName;
document.getElementById("team2Name").textContent = teamTwoName;
