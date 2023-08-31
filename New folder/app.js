var mints = document.getElementById("mints");
var sec = document.getElementById("sec");
var ms = document.getElementById("ms");
var miliSec = 0;
var seconds = 0;
var minutes = 0;
var interval;

function start() {
  interval = setInterval(StartTime, 10);
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = false
}

function StartTime() {
  miliSec++;
  ms.innerHTML = miliSec;
  if (miliSec == 100) {
    seconds++;
    sec.innerHTML = seconds;
    miliSec = 0;
  } else if (seconds == 59) {
    minutes++;
    mints.innerHTML = minutes;
    seconds = 0;
  }
}

function stop() {
  clearInterval(interval);
  document.getElementById("btn1").disabled = false;

}

function resetTimer() {
  stop()
  miliSec = 0;
  seconds = 0;
  minutes = 0;
  mints.innerHTML = minutes;
  sec.innerHTML = seconds;
  ms.innerHTML = miliSec;
}

/* reverse stopwatch */

var countdownInterval;
var remainingTime = 600;

function updateCountdownDisplay() {
  var seconds = Math.floor(remainingTime / 60);
  var miliSec = remainingTime % 100;
  document.getElementById("countdownDisplay").textContent = `${seconds.toString()}:${miliSec.toString()}`;
}

function startCountdown() {
  if (countdownInterval) return;
  countdownInterval = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime--;
      updateCountdownDisplay();
    } else {
      clearInterval(countdownInterval);
      countdownInterval = null;
      updateCountdownDisplay();

    }
  }, 13);
}
function stopCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  remainingTime = 600;
  updateCountdownDisplay();
}


/* CALULATOR */



var result = document.getElementById("getResult");

function getValue(num) {
  result.value += num;
}

function clearAll() {
  result.value = " ";
}

function calculateValue() {
  result.value = eval(result.value);
}

function clickBack() {
  result.value = result.value.slice(0, -1);
}

function operatorValue() {
  result.value = eval(result.value);
}

function doubleValue() {
  var res = result.value.slice(0, 1);
}