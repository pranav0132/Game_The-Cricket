let scoreStr = localStorage.getItem('score');
let score;

function resetScore() {
    score = {
        win: 0,
        lose: 0,
        tie: 0,
    };
    score.displayScore = function() {
        document.querySelector(".final-score").innerText = `Score: Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
    };
    score.displayScore();
    localStorage.setItem('score', JSON.stringify(score)); // Update local storage

    // Clear other texts
    document.querySelector(".user-move").innerText = "";
    document.querySelector(".computer-move").innerText = "";
    document.querySelector(".result").innerText = "";
}

function initializeScore() {
    scoreStr = localStorage.getItem('score');
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lose: 0,
        tie: 0,
    };
    score.displayScore = function() {
        document.querySelector(".final-score").innerText = `Score: Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
    };
    score.displayScore();
}

initializeScore();

function ran(ourchoice) {
    document.querySelector(".user-move").innerText = `Your Choice is ${ourchoice}`;

    let computerChoice;
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    document.querySelector(".computer-move").innerText = `Computer choice is ${computerChoice}`;

    if (
        (computerChoice === 'Ball' && ourchoice === 'Bat') ||
        (computerChoice === 'Stump' && ourchoice === 'Ball') ||
        (computerChoice === 'Bat' && ourchoice === 'Stump')
    ) {
        score.win++;
        document.querySelector(".result").innerText = 'Congratulations, you won!';
    } else if (
        (computerChoice === 'Bat' && ourchoice === 'Ball') ||
        (computerChoice === 'Ball' && ourchoice === 'Stump') ||
        (computerChoice === 'Stump' && ourchoice === 'Bat')
    ) {
        score.lose++;
        document.querySelector(".result").innerText = 'Bad luck... Computer won!';
    } else {
        score.tie++;
        document.querySelector(".result").innerText = "It's a tie!";
    }

    score.displayScore();
    localStorage.setItem('score', JSON.stringify(score)); // Update local storage
}


function ran(ourchoice) {
    document.querySelector(".user-move").innerText = `Your Choice is ${ourchoice}`;

    let computerChoice;
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    document.querySelector(".computer-move").innerText = `Computer choice is ${computerChoice}`;

    if (
        (computerChoice === 'Ball' && ourchoice === 'Bat') ||
        (computerChoice === 'Stump' && ourchoice === 'Ball') ||
        (computerChoice === 'Bat' && ourchoice === 'Stump')
    ) {
        score.win++;
        document.querySelector(".result").innerText = 'Congratulations, you won!';
        showConfetti(); // Trigger confetti effect
    } else if (
        (computerChoice === 'Bat' && ourchoice === 'Ball') ||
        (computerChoice === 'Ball' && ourchoice === 'Stump') ||
        (computerChoice === 'Stump' && ourchoice === 'Bat')
    ) {
        score.lose++;
        document.querySelector(".result").innerText = 'Bad luck... Computer won!';
    } else {
        score.tie++;
        document.querySelector(".result").innerText = "It's a tie!";
    }

    score.displayScore();
    localStorage.setItem('score', JSON.stringify(score)); // Update local storage
}

function showConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        container.appendChild(confetti);
        // Remove confetti after animation
        setTimeout(() => {
            container.removeChild(confetti);
        }, 1000);
    }
}
