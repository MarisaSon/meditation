const button=document.querySelector('#myButton');
button.addEventListener('click',function(){
  document.querySelector('#player').play();
  document.querySelector('#myVideo').play();
})

const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
  const rain = document.querySelector("#rain");
  let minutes = Math.floor(amountTime / 60);
  let sec = amountTime % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }
  rain.textContent = `${minutes} : ${sec}`;
  amountTime--;
  if (amountTime < 0) {
    stopTimer();
    amountTime = 0;
  }

  function stopTimer() {
    clearInterval(time);
  }
}

const time = setInterval(calculateTime, 1000);
