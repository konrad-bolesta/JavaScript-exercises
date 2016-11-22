var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var gameState = 'notStarted';

var player = {
    name: '',
    score: 0
};

var computer = {
    score: 0
};

var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('Kamień') });
pickPaper.addEventListener('click', function() { playerPick('Papier') });
pickScissors.addEventListener('click', function() { playerPick('Nożyce') });

initialize();

function initialize() {
    setGameElements();
}

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

function newGame() {
    player.name = prompt('Wpisz swoje imię', 'Imię gracza');
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

    checkRoundResult(playerPick, computerPick);
}

function getComputerPick() {
    var possiblePicks = ['Kamień', 'Papier', 'Nożyce'];
    return possiblePicks[Math.floor(Math.random()*3)];
} 

function checkRoundResult(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    if (playerPick === computerPick) {
        return setResult(null, computerResultElem, playerResultElem)
    }

    if ((computerPick === 'Kamień' && playerPick === 'Nożyce') ||
        (computerPick === 'Nożyce' && playerPick === 'Papier') ||
        (computerPick === 'Papier' && playerPick === 'Kamień')) {
            
        return setResult(computer, computerResultElem);
    }

    return setResult(player, playerResultElem);
}

function setResult(winner, winnerElem, drawElem) {
    if (drawElem) {
        winnerElem.innerHTML = 'Remis!';
        drawElem.innerHTML = 'Remis!';
    } else {
        winner.score++
        winnerElem.innerHTML = "Wygrana!";
    }
    afterRound();
}

function afterRound() {
    setGamePoints();
    if (achieved10Points()) {
        gameEnded();
    }    
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function achieved10Points() {
    return player.score === 10 || computer.score === 10;
}

function gameEnded() {
    gameState = 'ended';
    setGameElements();
    if (player.score === 10) {
        announceWinner(player.name)
    } else {
        announceWinner('Komputer');
    }
}

function announceWinner(winner) {
    function launchAlert() {
        alert('Wygrał ' + winner)
    }
    window.setTimeout(launchAlert, 1);
}