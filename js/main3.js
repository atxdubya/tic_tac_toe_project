

var player1 = prompt("Player 1, please enter your name.");
var player2 = prompt("Player 2, please enter your name.");
$(".player_1").html(player1);
$(".player_2").html(player2);


var buttonObj = {
	b0: "", b1: "", b2: "",
	b3: "", b4: "", b5: "",
	b6: "", b7: "", b8: "",
};

var playerTurn = 1;
var catcCounter = 0;

$(".square").on("click", function() {
	var buttonVal = $(this).attr('id');
	var buttonStop = ("#" + buttonVal);
	catcCounter++

	if($(this).hasClass("deny")) {
		return;
	}

	if(playerTurn === 1) {
		$(this).html('<img class="button_pic" src="dark.png">');
		$(this).addClass("deny");
		buttonObj[buttonVal] = "X";
		playerTurn = 2;
	}

	else if(playerTurn === 2) {
		$(this).html('<img class="button_pic" src="light.png">');
		$(this).addClass("deny");
		buttonObj[buttonVal] = "O";
		playerTurn = 1;
	}

	if (((buttonObj.b0 === "X") && (buttonObj.b1 === "X") && (buttonObj.b2 === "X")) ||
		((buttonObj.b3 === "X") && (buttonObj.b4 === "X") && (buttonObj.b5 === "X")) ||
		((buttonObj.b6 === "X") && (buttonObj.b7 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b0 === "X") && (buttonObj.b3 === "X") && (buttonObj.b6 === "X")) ||
		((buttonObj.b1 === "X") && (buttonObj.b4 === "X") && (buttonObj.b7 === "X")) ||
		((buttonObj.b2 === "X") && (buttonObj.b5 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b0 === "X") && (buttonObj.b4 === "X") && (buttonObj.b8 === "X")) ||
		((buttonObj.b2 === "X") && (buttonObj.b4 === "X") && (buttonObj.b6 === "X"))) {
			alert(player1 + " wins!!!");
			$(".results_list_1").append("<li>Win</li>");
			$(".results_list_2").append("<li>Loss</li>");
			refreshBoard();
	}

	if (((buttonObj.b0 === "O") && (buttonObj.b1 === "O") && (buttonObj.b2 === "O")) ||
		((buttonObj.b3 === "O") && (buttonObj.b4 === "O") && (buttonObj.b5 === "O")) ||
		((buttonObj.b6 === "O") && (buttonObj.b7 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b0 === "O") && (buttonObj.b3 === "O") && (buttonObj.b6 === "O")) ||
		((buttonObj.b1 === "O") && (buttonObj.b4 === "O") && (buttonObj.b7 === "O")) ||
		((buttonObj.b2 === "O") && (buttonObj.b5 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b0 === "O") && (buttonObj.b4 === "O") && (buttonObj.b8 === "O")) ||
		((buttonObj.b2 === "O") && (buttonObj.b4 === "O") && (buttonObj.b6 === "O"))) {
			alert(player2 + " wins!!!");
			$(".results_list_2").append("<li>Win</li>");
			$(".results_list_1").append("<li>Loss</li>");
			refreshBoard();
	}

	else if(catcCounter === 9) {
		alert("BE BETTER...");
		refreshBoard();
	}
})


function refreshBoard() {
		$(".square").removeClass("deny");
		$(".square").html("");
		for (var i = 0; i <= 8; i++) {
			buttonObj["b" + i] = "";
			}
		catcCounter = 0;
		}


$(".new_game").on("click", function() {
	if(confirm("Are you absolutely positvely with out a doubt sure you want to start a new game???"))
		location.reload();
})





