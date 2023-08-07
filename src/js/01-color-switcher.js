const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);
const bodyElement = document.querySelector('body');

stopBtn.disabled = true;

function onClickStart() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerID = setInterval(() => {
        bodyElement.style.backgroundColor = getRandomHexColor();
    }, 1000);
}
function onClickStop() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerID);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};