# Lab 5 - JavaScript Labs
Over the course of the next few labs, you will be creating a simple role-playing game. The game involves two players - the prompted user (you!) and the Almighty Grant. The game consists of simulated attacks that reduce the total health points of each player.

The game will be built in 4 stages:
	1. Set up the basic functionality of the game
	2. Complicate the game by adding fun ction ality
	3. Convert characters to objects
	4. Add a front-end to your game

# JavaScript Lab Part Three

## Task:
Convert the variables relating to Grant and the user’s character into objects. Add a heal method to the character’s object. The user can only heal two times throughout the duration of the game.

## What does the application do?
1. The character is now an object.
2. Grant is now an object.
3. The properties attack and heal are methods for the character object, and attack is a method for the Grant object.
4. Make sure the game tracks the character’s heal usage.

## Build Specifications:
1. The character must have the following properties
	a. name, health, wins, healCount, attack, and heal
2. Grant must have the following properties
	a. name, health, attack
3. The user’s attack method should return a number between 1 and 3 (this has changed from the original numbers).
4. The user’s heal method should add a number between 1 and 10 to the character’s health and change the healCount number.
5. Grant’s attack method should return a number between 1 and 5.