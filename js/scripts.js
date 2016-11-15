var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');
	
pickRock.addEventListener('click', function() { playerPick('Kamień') });
pickPaper.addEventListener('click', function() { playerPick('Papier') });
pickScissors.addEventListener('click', function() { playerPick('Nożyce') });

var gameState = 'notStarted', //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
        break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'block';
    }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
    var possiblePicks = ['Kamień', 'Papier', 'Nożyce'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

        if (playerPick === computerPick) {
            winnerIs = 'noone'; // remis
        } else if (
            (computerPick === 'Kamień' && playerPick === 'Nożyce') ||
            (computerPick === 'Nożyce' && playerPick === 'Papier') ||
            (computerPick === 'Papier' && playerPick === 'Kamień') ) {

                winnerIs = 'computer';
        }

        if (winnerIs === 'player') {
            playerResultElem.innerHTML = "Wygrana!";
            player.score++;
        } else if (winnerIs === 'computer') {
            computerResultElem.innerHTML = "Wygrana!";
            computer.score++;
        }

        setGamePoints();
        endGame();
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function endGame() {
    if (player.score === 10 || computer.score === 10 ) {
        gameState = 'ended';
        setGameElements();
    }
}