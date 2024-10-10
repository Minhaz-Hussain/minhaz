
let score = JSON.parse(localStorage.getItem("score"))
if (score === null) {
    score = {
        wins:  0,
        losses: 0,
        ties: 0,
    };
}

updateScore();

function updateScore() {
    document.querySelector('.js-score').innerText = `Wins: ${score.wins}   Losses: ${score.losses}   Ties: ${score.ties}`;
}

function buttonClick (input) {
    let computerMove = Math.random();
    result = '';
    if(input === 'rock') {
        if(computerMove >= 0 && computerMove < (1/3)) {
            computerMove = 'rock';
            result = 'You Tie';
        }
        else if(computerMove >= (1/3) && computerMove < (2/3)) {
            computerMove = 'paper';
            result = 'You Lose';
        }
        else if(computerMove >= (2/3) && computerMove < 1) {
            computerMove = 'scissors';
            result = 'You Win';
        }
    }
    if(input === 'paper') {
        if(computerMove >= 0 && computerMove < (1/3)) {
            computerMove = 'rock';
            result = 'You Win';
        } 
        else if(computerMove >= (1/3) && computerMove < (2/3)) {
            computerMove = 'paper';
            result = 'You Tie';
        }
        else if(computerMove >= (2/3) && computerMove < 1) {
            computerMove = 'scissors';
            result = 'You Lose';
        }
    }
    if(input === 'scissors') {
        if(computerMove >= 0 && computerMove < (1/3)) {
            computerMove = 'rock';
            result = 'You Lose';
        } 
        else if(computerMove >= (1/3) && computerMove < (2/3)) {
            computerMove = 'paper';
            result = 'You Win';
        }
        else if(computerMove >= (2/3) && computerMove < 1) {
            computerMove = 'scissors';
            result = 'You Tie';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'You Tie') {
        score.ties += 1;
    }
    
    document.querySelector('.js-input').innerHTML = `You chose ${input}. Computer chose ${computerMove}.
    ${result}`

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();
}
 





