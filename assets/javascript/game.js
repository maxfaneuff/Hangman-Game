///JavaScript for Hangman game//

//Variables//
var word;
var guessNum;
var rightGuess;
var wrongGuess;
var wins;
var chosenWord;
var wordToDisplay = "";

var lettersGuessed = document.getElementById("wrongGuess");


var words = ["antelope", "kangaroo", "elephant"];
var availLetters = "abcdefghijklmnopqrstuvwxyz";
var guessNum = 12;

// var letter = String.fromCharCode(event.which).toLowerCase();
//Functions//

window.onload = function() {
	console.log("window.onload");
	var wordElement = document.getElementById("word");

	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log(chosenWord);
	console.log("---Chosen word---")
	guessNum = 12;
	rightGuess = [];
	wrongGuess = [];
	for (var i = 0; i < chosenWord.length; i++) {
		rightGuess.push(chosenWord[i]);
		console.log(rightGuess);
		wordToDisplay += "_"
		}

	// for (var i = 0; i < chosenWord.length; i++) {
	// 	// dashes.innerHTML = "_";
	// }
	var word = document.createElement("div");
	word.innerHTML = wordToDisplay;
	wordElement.appendChild(word);
};	

	// wordElement.innerHTML = correctGuesses.join(" ");
	// letterCount.innerHTML = guessNum;
function displayLetters (userGuess) {
	var wordToDisplayArr = wordToDisplay.split("")
	for (var i = 0; i < chosenWord.length; i++) {
		if(userGuess === chosenWord[i]) {
			// wordToDisplay += userGuess;
			wordToDisplayArr[i] = userGuess;
		}
	}
	console.log("---wordToDisplayArr---");
	console.log(wordToDisplayArr);
	wordToDisplay = wordToDisplayArr.join("");
	return wordToDisplay;
}

document.onkeyup = function(event) {
	var guessLeft = document.getElementById("guessNum");
	var letterCount = document.getElementById("wrongGuess");
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
		console.log("---selected letter---");
	letterCount.innerHTML = guessNum;

	if((chosenWord.indexOf(userGuess) != -1)) {
		console.log(true);
		var wordElement = document.getElementById("word");
		var wordDisplaying = displayLetters(userGuess);
		console.log(wordDisplaying);
		wordElement.innerHTML = wordDisplaying;
	} else {
		wrongGuess.push(userGuess);
		guessNum--;
		guessLeft.innerHTML = guessNum;
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