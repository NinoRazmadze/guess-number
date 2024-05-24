'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🏆 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guessedNumbers = [];

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guessedNumbers.includes(guess)) {
    document.querySelector('.message').textContent =
      'You already guessed ' + guess;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🏆 Correct Number Lizi<3!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  guessedNumbers.push(guess);
});

// Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
});
