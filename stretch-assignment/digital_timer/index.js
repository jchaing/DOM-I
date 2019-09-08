const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

let secondsCounter = 1;
let msHundredsCounter = 0;
let msTensCounter = 0;

const timerTenSeconds = setInterval(() => (secondTens.textContent = 1), 10000);

const timerSeconds = setInterval(
  () => (secondOnes.textContent = secondsCounter++),
  1000
);

const timerMS = setInterval(() => {
  if (msTensCounter < 10) {
    msTens.textContent = msTensCounter++;
    if (msTensCounter === 9 && msHundredsCounter < 10) {
      msTensCounter = 0;
      msHundreds.textContent = msHundredsCounter++;
      if (msHundredsCounter === 9 && secondsCounter < 10) {
        msHundredsCounter = 0;
      }
    }
  }
}, 10);

setTimeout(() => {
  clearInterval(timerTenSeconds);
  clearInterval(timerSeconds);
  clearInterval(timerMS);
  secondTens.textContent = 1;
  secondOnes.textContent = 0;
  msHundreds.textContent = 0;
  msTens.textContent = 0;
  secondTens.style.color = 'red';
  secondOnes.style.color = 'red';
  msHundreds.style.color = 'red';
  msTens.style.color = 'red';
  colon.style.color = 'red';
}, 10000);
