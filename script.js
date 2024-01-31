// Nice to have: Diver som fylles med andre diver.

const app = document.getElementById('app');
const roundTime = document.getElementById('lastRound');
let seconds = 0;
var timer;
let round = roundTime.innerHTML;

        
        function startTimer(){
          setInterval(countSeconds, 1000);
        }

        function countSeconds(){
            app.innerHTML = seconds;
            seconds++;
        }

        function pauseTimer(){ 
            roundTime.innerHTML += `<li>${seconds-1} sekunder</li>`;
            clearInterval(timer);
            seconds = 0;
        }

        function stopAll(){
            location.reload()
        }

function openChest () {
let x = document.getElementById("lastRound")
if ( x.style.display === "none") {
  x.style.display ="block";
}else {
  x.style.display = "none";
}
}
