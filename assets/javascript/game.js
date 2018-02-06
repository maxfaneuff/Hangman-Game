///JavaScript for Hangman game//

//Variables//
var word;
var guessNum = 12;
var rightGuess;
var wrongGuess;
var wins;
var chosenWord;
var wordToDisplay = "";
var wordToDisplayArr = [];

var lettersGuessed = document.getElementById("wrongGuess");


var words = ["antelope", "kangaroo", "elephant"];
var availLetters = "abcdefghijklmnopqrstuvwxyz";

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
	console.log("wordToDisplay");
	console.log(wordToDisplay);
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


	for (var i = 0; i < wordToDisplayArr.length; i++) {
		if(wordToDisplay[i] != "_") {
			alert("You win!");
			wins++;
		}
	}

	
}

function resetGame () {
	rightGuess = [];
	wordToDisplay = [];
	wrongGuess = [];
	// document.getElementById("hangman_image").setAttribute("src", "assets/images/hangman_logo.png");
	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log(chosenWord);
	guessNum = 12;
	rightGuess = [];
	wrongGuess = [];
	for (var i = 0; i < chosenWord.length; i++) {
		rightGuess.push(chosenWord[i]);
		console.log(rightGuess);
		wordToDisplay += "_"
		}

	var word = document.createElement("div");
	word.innerHTML = wordToDisplay;
	wordElement.appendChild(word);
}

document.onkeyup = function(event) {
	var guessLeft = document.getElementById("guessNum");
	var letterCount = document.getElementById("wrongGuess");
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
		console.log("---selected letter---");
	// letterCount.innerHTML = wrongGuess;

	if((chosenWord.indexOf(userGuess) != -1)) {
		console.log(true);
		var wordElement = document.getElementById("word");
		var wordDisplaying = displayLetters(userGuess);
		console.log(wordDisplaying);
		wordElement.innerHTML = wordDisplaying;
	} else {
		wrongGuess.push(userGuess);
		guessNum--;
		letterCount.innerHTML = wrongGuess;
		guessLeft.innerHTML = guessNum;
		// document.getElementById("hangman_image").setAttribute("src", "assets/images/you_lose.png");
		console.log(guessNum);
		console.log(false);
		console.log("--------");
		console.log(wrongGuess);
		console.log("---wrongGuess Array---")
	} if(guessNum === 0) {
		alert("you lose");
		resetGame();
	} 





	// var html =
	// "<p>You chose " + userGuess + "</p>";

	// userText.innerHTML = html;
	
};

//notation//
document.getElementById("guess-here")