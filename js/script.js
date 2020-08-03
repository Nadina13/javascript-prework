function playGame(playerInput){
	function getMoveName(MoveId){
		if(MoveId == 1){
		return 'kamień';
		} else if(MoveId == 2){
		return 'papier';
		} else if(MoveId == 3){
		return 'nożyce';
		} else if(MoveId > 3){
		return 'nieznany ruch';
  		}
	}

clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
/* if(randomNumber == 1){
	computerMove = 'kamień';
	printMessage('Mój ruch to: ' + computerMove);
} else if(randomNumber == 2) {
	computerMove = 'papier';
	printMessage('Mój ruch to: ' + computerMove);
} else if(randomNumber == 3) {
	compurerMove = 'nożyce';
	printMessage('Mój ruch to: ' + computerMove);
} */

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = playGame();*/

/* if(playerInput == '1'){
	playerMove = 'kamień';
	printMessage('Twój ruch to: ' + playerMove);
} else if(playerInput == '2') {
	playerMove = 'papier';
	printedMessage('Twój ruch to: ' + playerMove);
} else if(playerInput == '3') {
	playerMove = 'nożyce';
	printedMessage('Twój ruch to: ' + playerMove);
}*/

	function displayResult(ComputerMove, PlayerMove){ 	
		printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
		if(ComputerMove == 'kamień' && PlayerMove == 'papier'){
			printMessage('Ty wygrywasz!');
		} else if(ComputerMove == 'papier' && PlayerMove == 'nożyce'){
			printMessage('Ty wygrywasz!');
		} else if(ComputerMove == 'nożyce' && PlayerMove == 'kamień'){
			printMessage('Ty wygrywasz!');
		} else if(PlayerMove == 'nieznany ruch'){
			printMessage('Wybierz ponownie');
		} else if(ComputerMove == PlayerMove){
			printMessage('Remis');
		} else {
			printMessage('Przegrałeś ;-)');
		}
	} 

	displayResult(computerMove, playerMove);
}

let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function() {
    playGame(1);
});

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function() {
    playGame(2);
});

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function() {
    playGame(3);
});