(function() {
	function initialize() {
		console.log("initialized!");
		let startButton = document.getElementById("startButton");

		let userName = "";
		let grantName = "Grant";

		startButton.addEventListener("click", function startGame() {
			let userHealth = 20;
			let grantHealth = 10;
			let userWins = 0;
			let grantWins = 0;
			let scoreToWin = 3;
			let keepPlayingGame;
			let keepPlayingMatch = true;

			if (userName) {
				startCombat();
			} else {
			userName = prompt("Please enter your name."); // prompt for user name
			}

			if (userName) { // check to see if user name was entered
				startCombat();
			} else {
				exitCombat();
			}

			function startCombat() {
			do { // do...while... loop initializes and plays through each match
			while (userHealth > 0 && grantHealth > 0 && keepPlayingMatch === true) { // as long as they are alive... deal damage.
			let attack = window.confirm(userName + " has " + userHealth + " health\n" + grantName + " has " + grantHealth  + " health\n" + "Click OK to attack or Cancel to retreat."); // prompt user to keep playing... ATTACK/QUIT
			if (attack === true) {
				damage();
			} else {
				exitCombat();
			}	
			}	
			if (userHealth <= 0) { // check health to see if there is a winner
				matchIsWon(grantName);
			} else if (grantHealth <= 0){
				matchIsWon(userName);
			} // end check health, end of each match

			if (keepPlayingMatch === false) {
				keepPlayingGame = false;
			} else {
				keepPlayingGame = (userWins < scoreToWin) && (grantWins < scoreToWin);	
			}	

			heal(userName, 5);
			heal(grantName, 10);

			if (userWins === scoreToWin) {
				gameIsWon(userName);
			} else if (grantWins === scoreToWin) {
			gameIsWon(grantName);//end of game do...while...
			}
			} while (keepPlayingGame); //end of game do...while...
			} //end of startCombat()

			function damage() {		
				userHealth -= getDamage(1,5);
				grantHealth -= getDamage(1,5);
				console.log(userName + " has " + userHealth + " health");
				console.log(grantName + " has " + grantHealth  + " health");
			}

			function getDamage(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min)) + min;
			}

			function heal(userToHeal, healthToAdd) {
				if (userToHeal === userName) {
					userHealth = userHealth += healthToAdd;
				} else if (userToHeal === grantName) {
					grantHealth = grantHealth += healthToAdd;
				}
			}

			function matchIsWon(player) {
				if (player === userName) {
					userWins += 1;
					console.log(userName + " wins the match! The score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);
					alert(userName + " wins the match!\nThe score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);            
				} else if (player === grantName) {
					grantWins += 1;
					console.log(grantName + " wins the match! The score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);
					alert(grantName + " wins the match!\nThe score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);
				}
			}

			function gameIsWon(player) {
				if ((player === userName) &&  (userWins === scoreToWin)) {
					console.log(userName + " WINS THE GAME!");
					alert(userName + " WINS THE GAME!");
					let playAgain = window.confirm("Would you like to start a new game?\nClick OK to play a new game or Cancel to quit.");
					if (playAgain) {
						startGame();
					} else {
						exitCombat();
					}
				} else if (player === grantName) {
					console.log(grantName + " WINS THE GAME!");
					alert(grantName + " WINS THE GAME!");
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
		}); // thanks for playing!

	} // end of initialize function
initialize(); // call initialize to start
}()); // end of immediately invoked function
