let score = 0;
let hitNum = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitNum;
}

function runTimer() {
  let timer = 60;

  let timeIntclose = setInterval(function () {
    if (timer > 0) {
      document.querySelector("#timer").textContent = timer;
      timer--;
    } else {
      clearInterval(timeIntclose);
      //   document.querySelector("#circle-div-p").innerHTML = `GAME OVER MY FRND`;
      // console.log(timer);
    }
  }, 1000);
}

function makeBubbles() {
  let clutter = "";

  for (let i = 0; i <= 111; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#circle-div-p").innerHTML = clutter;
}

document
  .querySelector("#circle-div-p")
  .addEventListener("click", function (details) {
    let clickednum = Number(details.target.textContent);
    // console.log(clickednum);
    console.log(hitNum);
    if (clickednum == hitNum) {
      increaseScore();
      getNewHit();
      makeBubbles();
    }
  });
makeBubbles();
getNewHit();
runTimer();
