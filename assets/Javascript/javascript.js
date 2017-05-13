var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
//array to capture user input
var guessedLetters = []


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    //variable to capture users guess
    var userGuess = event.key;
    //capture the letters entered
    guessedLetters.push(userGuess);
