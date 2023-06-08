const button=document.querySelector('#myButton');
button.addEventListener('click',function(){
  document.querySelector('#player').play();
  document.querySelector('#myVideo').play();
})

const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
  const nature = document.querySelector("#nature");
  let minutes = Math.floor(amountTime / 60);
  let sec = amountTime % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }
  nature.textContent = `${minutes} : ${sec}`;
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
