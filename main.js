
// Player 1 and 2 enter their name and it shows up on their respective sides...CHECK
// $(".player_1").html(prompt("Player 1, please enter your name."));
// $(".player_2").html(prompt("Player 2, please enter your name."));


// Auto assign X with Player 1 and O with Player 2
	// Need to figure out how to assign an X or O to the player's respective clicks/moves
// Listen for the "click" and place and X wherever they click...CHECK
	// Switch between turns... CHECK
	// Leave marker in the respective box... CHECK
var playerTurn = 1;

$(".square").on("click", function() {
	if(playerTurn === 1) {
		$(this).text("X");
		playerTurn = 2;
	}

	else if(playerTurn === 2) {
		$(this).text("O");
		playerTurn = 1;
	}
})

/////////	WORKING ON THIS CODE TO RECOGNIZE 3 IN A ROW /////////
// $(".square").on(function() {
// 	if(playerTurn == 2) {
// 		alert("You win");
// 	}
// })

// Recognize when there are 3 of either marker in a rowa
	// Create an alert saying, said player has won that game.
	// Recognize a cat's game



// Mark the win in the corect player column (aka the chalkboard)




// Click button for "New Game"...CHECK
$(".new_game").on("click", function() {
	if(confirm("Are you absolutely positvely with out a doubt sure you want to start a new game???"))
		location.reload();
})