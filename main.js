
// Player 1 and 2 enter their name and it shows up on their respective sides...CHECK
$(".player_1").html(prompt("Player 1, please enter your name."));
$(".player_2").html(prompt("Player 2, please enter your name."));


// Track the moves in JS...CHECK
var buttonObj = {
	b0: "", b1: "", b2: "",
	b3: "", b4: "", b5: "",
	b6: "", b7: "", b8: "",
};

// Auto assign X with Player 1 and O with Player 2...CHECK
	// Need to figure out how to assign an X or O to the player's respective clicks/moves...CHECK
// Listen for the "click" and place and X wherever they click...CHECK
	// Switch between turns... CHECK
	// Leave marker in the respective box...CHECK
var playerTurn = 1;

$(".square").on("click", function() {
	var buttonVal = $(this).attr('id');

	if(playerTurn === 1) {
		$(this).text("X");
		buttonObj[buttonVal] = "X";
		playerTurn = 2;
		// if($(this).val() === "X" || $(this).val() === "O") {
		// 	return;
		// }...NOT WORKING!
	}

	else if(playerTurn === 2) {
		$(this).text("O");
		buttonObj[buttonVal] = "O";
		playerTurn = 1;
		// if($(this).val() === "X" || $(this).val() === "O") {
		// 	return;
		// }...NOT WORKING!
	}

	// Recognize when there are 3 of either marker in a rowa
	// Create an alert saying, said player has won that game...CHECK
	if (((buttonObj.b0 === "X") && (buttonObj.b1 === "X") && (buttonObj.b2 === "X")) ||
		((buttonObj.b3 === "X") && (buttonObj.b4 === "X") && (buttonObj.b5 === "X")) ||
		((buttonObj.b6 === "X") && (buttonObj.b7 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b0 === "X") && (buttonObj.b3 === "X") && (buttonObj.b6 === "X")) ||
		((buttonObj.b1 === "X") && (buttonObj.b4 === "X") && (buttonObj.b7 === "X")) ||
		((buttonObj.b2 === "X") && (buttonObj.b5 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b0 === "X") && (buttonObj.b4 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b2 === "X") && (buttonObj.b4 === "X") && (buttonObj.b6 === "X"))) {
		alert("X wins!!!");
		}

	if (((buttonObj.b0 === "O") && (buttonObj.b1 === "O") && (buttonObj.b2 === "O")) ||
		((buttonObj.b3 === "O") && (buttonObj.b4 === "O") && (buttonObj.b5 === "O")) ||
		((buttonObj.b6 === "O") && (buttonObj.b7 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b0 === "O") && (buttonObj.b3 === "O") && (buttonObj.b6 === "O")) ||
		((buttonObj.b1 === "O") && (buttonObj.b4 === "O") && (buttonObj.b7 === "O")) ||
		((buttonObj.b2 === "O") && (buttonObj.b5 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b0 === "O") && (buttonObj.b4 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b2 === "O") && (buttonObj.b4 === "O") && (buttonObj.b6 === "O"))) {
		alert("O wins!!!");
		}
})

//////// TO DO LIST ////////

// Do not allow someone to change a square if it has already been clicked

// Recognize a cat's game

// Mark the win in the corect player column (aka the chalkboard)

// Name which player won by name


// Click button for "New Game"...CHECK
$(".new_game").on("click", function() {
	if(confirm("Are you absolutely positvely with out a doubt sure you want to start a new game???"))
		location.reload();
})