var psychicLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for tracking our wins, losses and ties. They begin at 0.
var youWin = 0;
var youLose = 0;
var guessesLeft = 10;
//array to capture user input
var guessedLetters = [];


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    //variable to capture users guess
    var userGuess = event.key;
    //capture the letters entered
    guessedLetters.push(userGuess);

    var computerGuess = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];

    //point added if guess correct
    if (userGuess === computerGuess) {
      youWin++;
      //guessesLeft = 9;
    }

    //if it doesnt  match you lose a guess
    else {
      guessesLeft--;
    }

    if (guessesLeft === 0); {
      youLose++;
      //guessesLeft = 9;
    }

    var html = "<p>Guess what letter I'm thinking of: </p>" +
      "<p>Wins: " + youWin + "</p>" +
      "<p>Loses: " + youLose + "</p>" +
      "<p>Guesses Remaining: " + guessesLeft + "</p>" +
      "<p>Guessed Letter: " + guessedLetters.join(",") + "<p>";

      document.getElementById("results").innerHTML = html;
  }
