let inputs, clock, alarm, hours, minutes, seconds, repeater;

window.addEventListener(`load`, () => {
  inputs = Array.from(document.getElementsByClassName(`number`));
  clock = document.querySelector(`.clock`);
  alarm = new Audio(`sound/alarm.mp3`);
});

function startTimer() {
  // Leer los inputs
  parseTime();
  // Actualizar la vista
  setTimer();
  // Arrancar el timer
  countdown();
}

function parseTime() {
  hours = Number(inputs[0].value);
  minutes = Number(inputs[1].value);
  seconds = Number(inputs[2].value);
}

function setTimer() {
  clock.innerHTML = `<p class="number">${hours > 9 ? hours : (`0` + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : (`0` + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : (`0` + seconds)}</p><span>seg</span>`

  document.title = `${hours > 9 ? hours : (`0` + hours)}:${minutes > 9 ? minutes : (`0` + minutes)}:${seconds > 9 ? seconds : (`0` + seconds)}`;
}

function countdown() {
  repeater = setInterval(runner, 1000);
}

function runner() {
  /* Si tengo más de 0 segundos, restá segundos */
  /* Si tengo 0 segundos, pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos */
  /* Si tengo 0 segundos, 0 minutos, pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas */
  /* Sino arranca la alarma */

  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else {
      if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
      } else {
        alarm.play();
      }
    }
  }

  setTimer();

}

function stopTimer() {
  clearInterval(repeater);
  location.reload();
}