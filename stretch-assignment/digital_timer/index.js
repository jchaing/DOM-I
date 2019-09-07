const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

let secondsCounter = 1;
let msHundredsCounter = 1;
let msCounter = 1;

const timerTenSeconds = setInterval(() => (secondTens.textContent = 1), 10000);

const timerSeconds = setInterval(
  () => (secondOnes.textContent = secondsCounter++),
  1000
);

const timerMsHundred = setInterval(() => {
  msHundreds.textContent = msHundredsCounter++;
  if (msHundredsCounter === 9) {
    msHundreds.textContent = 0;
  }
}, 100);

const timerMsTens = setInterval(() => {
  msTens.textContent = msCounter++;
  if (msCounter === 10) {
    msTens.textContent = 0;
  }
}, 10);

setTimeout(() => {
  clearInterval(timerTenSeconds);
  clearInterval(timerSeconds);
  clearInterval(timerMsHundred);
  clearInterval(timerMsTens);
  secondOnes.textContent = 0;
  msHundreds.textContent = 0;
  msTens.textContent = 0;
}, 10000);

setTimeout(() => {
  clearInterval;
});
