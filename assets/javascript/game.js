///JavaScript for Hangman game//

//Variables//
var word;
var guessNum;
var rightGuess;
var wrongGuess;
var wins;

var lettersGuessed = document.getElementById("wrongGuess");


var word = ["antelope", "kangaroo", "elephant"];
var availLetters = "abcdefghijklmnopqrstuvwxyz";
var guessNum = 12;

// var letter = String.fromCharCode(event.which).toLowerCase();
//Functions//

window.onload = function() {
	var wordElement = document.getElementById("word");

	chosenWord = word[Math.floor(Math.random() * word.length)];
	console.log(chosenWord);
	console.log("---Chosen word---")
	guessNum = 12;
	rightGuess = [];
	wrongGuess = [];
	for (var i = 0; i < chosenWord.length; i++) {
		rightGuess.push(chosenWord[i]);
		console.log(rightGuess);
		}

	for (var i = 0; i < chosenWord.length; i++) {
		var dashes = document.createElement("div");
		dashes.innerHTML = "_";
		wordElement.appendChild(dashes);
	}
};	

	// wordElement.innerHTML = correctGuesses.join(" ");
	// letterCount.innerHTML = guessNum;
document.onkeyup = function(event) {
	var letterCount = document.getElementById("wrongGuess");
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
		console.log("---selected letter---");
	letterCount.innerHTML = guessNum;

	if((chosenWord.indexOf(userGuess) != -1)) {
		console.log(true);
	} else {
		wrongGuess.push(userGuess);
		guessNum--;
		console.log(guessNum);
		console.log(false);
		console.log("--------");
		console.log(wrongGuess);
		console.log("---wrongGuess Array---")
	}

	// var html =
	// "<p>You chose " + userGuess + "</p>";

	// userText.innerHTML = html;
	
};

//notation//
document.getElementById("guess-here")