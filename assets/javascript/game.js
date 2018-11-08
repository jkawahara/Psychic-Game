// Declare variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9; 
var guessSoFar = "";
var letterGuess;
var computerGuess;

// Target DOM elements
var displayWins = document.getElementById("wins-text");
var displayLosses = document.getElementById("losses-text");
var displayGuessLeft = document.getElementById("guessLeft-text");
var displayGuessSoFar = document.getElementById("guessSoFar-text");

// Loop from 9 guesses
// for (var i = 9; i >= 0; i--) {

// Event listener for key press
document.onkeyup = function(event) {
  var userGuess = event.key;

  // Check a letter was guessed
  for (var i = 0; i < alphabet.length; i++) {
    if (userGuess === alphabet[i]) {
      letterGuess = alphabet[i];
      
      // Pick random number at start of game
      if (guessLeft === 9) {
        computerGuess = alphabet[Math.floor(Math.random() * 26)];
      }
      
      // Format letters guessed
      if (guessSoFar !== "") {
        guessSoFar = guessSoFar + ", " + letterGuess;
      } else {
        guessSoFar = letterGuess;
      }

      // Conditional for userGuess being letter of alphabet
      if (letterGuess === computerGuess) {
        wins++;
        guessLeft = 9;
        guessSoFar = "";
        displayWins.textContent = wins;
        displayGuessLeft.textContent = guessLeft;
        displayGuessSoFar.textContent = guessSoFar;
      } else if (guessLeft === 1) {
        losses++;
        guessLeft = 9;
        guessSoFar = "";
        displayLosses.textContent = losses;
        displayGuessLeft.textContent = guessLeft;
        displayGuessSoFar.textContent = guessSoFar;
      } else {
        guessLeft--;
        displayGuessLeft.textContent = guessLeft;
        displayGuessSoFar.textContent = guessSoFar;
      }
    }
  }
}