let seconds = 0;
let timerInterval;

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById('timer').textContent = seconds;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval); 
  timerInterval = null; 
  seconds = 0; 
  document.getElementById('timer').textContent = seconds; 
}
