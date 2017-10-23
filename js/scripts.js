(function() {
	function initialize() {
		console.log("initialized!");

		function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min)) + min;
				}

		let userPlayer = {
			name: "",
			health: 20,
			wins: 0,
			healCount: 3,
			//heal:		// method for the user object
			heal : function() { 
				let healthToAdd = getRandomInt(1, 10);
				userPlayer.health = userPlayer.health += healthToAdd;
				userPlayer.healCount -= 1;
			},
			//attack: ,	// method for the user object
			attack : function() { 
				let attackPower = getRandomInt(1, 3);
				compPlayer.health = compPlayer.health -= attackPower;
			}
		}

		let compPlayer = {
			name: "Grant", 
			health: 20,
			wins: 0,
			//attack:	// method for the comp object
			attack : function() { 
				let attackPower = getRandomInt(1, 5);
				userPlayer.health = userPlayer.health -= attackPower;
			},
		}
debugger;
		let startButton = document.getElementById("startButton");
		startButton.addEventListener("click", startGame());

			function startGame() {
				console.log("game started!");
				// let userPlayer.health = 20;
				// let compPlayer.health = 10;
				// let userPlayer.wins = 0;
				// let compPlayer.wins = 0;
				let scoreToWin = 3;
				let keepPlayingGame;
				let keepPlayingMatch = true;

				if (userPlayer.name) {
					startCombat();
				} else {
					userPlayer.name = prompt("Please enter your name."); // prompt for user name
				}

				if (userPlayer.name) { // check to see if user name was entered
					startCombat();
				} else {
					exitCombat();
				}

			function startCombat() {
				do { // do...while... loop initializes and plays through each match
					while (userPlayer.health > 0 && compPlayer.health > 0 && keepPlayingMatch === true) { // as long as they are alive & keepPlaying... deal damage.
					let attack = window.confirm(userPlayer.name + " has " + userPlayer.health + " health\n" + compPlayer.name + " has " + compPlayer.health  + " health\n" + "Click OK to attack or Cancel to retreat."); // prompt user to keep playing... ATTACK/QUIT
						if (attack === true) {
							damage();
						} else {
							exitCombat();
						}	
					} // end of battle loop

					if (userPlayer.health <= 0) { // check health to see if there is a winner
						matchIsWon(compPlayer.name, compPlayer.wins);
					} else if (compPlayer.health <= 0){
						matchIsWon(userPlayer.name, userPlayer.wins);
					} // end check health, end of each match

					if (keepPlayingMatch === false) {
						keepPlayingGame = false;
					} else {
						keepPlayingGame = (userPlayer.wins < scoreToWin) && (compPlayer.wins < scoreToWin);	
					}	

					if (userPlayer.wins === scoreToWin) {
						gameIsWon(userPlayer.name);
					} else if (compPlayer.wins === scoreToWin) {
						gameIsWon(compPlayer.name);//end of game do...while...
					}

					// heal(userPlayer.name, 5); // this is moved to the userPlayer object
					heal(compPlayer.name, 10);

				} while (keepPlayingGame); //end of game do...while...
			} //end of startCombat()

				function damage() {		
					userPlayer.health -= getRandomInt(1,5);
					compPlayer.health -= getRandomInt(1,5);
					console.log(userPlayer.name + " has " + userPlayer.health + " health");
					console.log(compPlayer.name + " has " + compPlayer.health  + " health");
				}

				// function getDamage(min, max) {
				// 	min = Math.ceil(min);
				// 	max = Math.floor(max);
				// 	return Math.floor(Math.random() * (max - min)) + min;
				// }

				// function getRandomInt(min, max) {
				// 	min = Math.ceil(min);
				// 	max = Math.floor(max);
				// 	return Math.floor(Math.random() * (max - min)) + min;
				// }

				function heal(userToHeal, healthToAdd) {
					if (userToHeal === userPlayer.name) {
						userPlayer.health = userPlayer.health += healthToAdd;
					} else if (userToHeal === compPlayer.name) {
						compPlayer.health = compPlayer.health += healthToAdd;
					}
				}

				// function matchIsWon(player) {
				// 	if (player === userPlayer.name) {
				// 		userPlayer.wins += 1;
				// 		console.log(userPlayer.name + " wins the match! The score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
				// 		alert(userPlayer.name + " wins the match!\nThe score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);            
				// 	} else if (player === compPlayer.name) {
				// 		compPlayer.wins += 1;
				// 		console.log(compPlayer.name + " wins the match! The score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
				// 		alert(compPlayer.name + " wins the match!\nThe score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
				// 	}
				// }

				function matchIsWon(player, wins) {
					player.wins += 1;
					console.log(player.name + " wins the match! The score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
					alert(player.name + " wins the match!\nThe score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
				}

				function gameIsWon(player) {
					if ((player === userPlayer.name) &&  (userPlayer.wins === scoreToWin)) {
						console.log(userPlayer.name + " WINS THE GAME!");
						alert(userPlayer.name + " WINS THE GAME!");
						let playAgain = window.confirm("Would you like to start a new game?\nClick OK to play a new game or Cancel to quit.");
						if (playAgain) {
							startGame();
						} else {
							exitCombat();
						}
					} else if (player === compPlayer.name) {
						console.log(compPlayer.name + " WINS THE GAME!");
						alert(compPlayer.name + " WINS THE GAME!");
						let playAgain = window.confirm("Would you like to start a new game?\nClick OK to play a new game or Cancel to quit.");
						if (playAgain) {
							startGame();
						} else {
							exitCombat();
						}
					}
				}

				function exitCombat() {
					keepPlayingMatch = false;
					keepPlayingGame = false;
				}
		} // end of startGame, thanks for playing!

	} // end of initialize function
initialize(); // call initialize to start
}()); // end of immediately invoked function
