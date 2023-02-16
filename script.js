let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const resetButton = document.querySelector(".resetButton");
let guessCount = 1;


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.style.color = 'green';
        lastResult.textContent = 'Congratulations! You got it right!';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'red';
        lastResult.style.fontWeight = 700;
        if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!' ;
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
resetButton.addEventListener('click',resetGame);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.disabled = false;
    guessSubmit.parentNode.removeChild(guessSubmit);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    resetButton.parentNode.insertBefore(guessSubmit,resetButton);
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}