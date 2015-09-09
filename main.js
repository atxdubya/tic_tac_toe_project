
// Player 1 and 2 enter their name and it shows up on their respective sides...CHECK
$(".player_1").html(prompt("Player 1, please enter your name."));
$(".player_2").html(prompt("Player 2, please enter your name."));



// Auto assign X with Player 1 and O with Player 2



	

// Click button for "New Game"...CHECK
$(".new_game").on("click", function() {
	if(confirm("Are you absolutely positvely with out a doubt sure you want to start a new game???"))
		location.reload();
})



// Player 1 goes first... Listen for the "click" and place and X wherever they click. Do the same for all of the other turns



// Recognize when there are 3 of either marker in a row and create an alert saying, said player has won that game.



// Mark the win in the corect player column (aka the chalkboard)