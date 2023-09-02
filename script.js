let Timer = 60;
let score = 0;
let hit = 0;

const createBubble = () => {
  let clutter = "";
  for (let i = 1; i <= 133; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
};

const statTimer = () => {
  let timing = setInterval(() => {
    if (Timer > 0) {
      Timer--;
      document.querySelector("#timer").textContent = Timer;
    } else {
      clearInterval(timing);
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over!!!</h2>`;
    }
  }, 1000);
};

const increaseScore = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
};

const getNewHit = () => {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hit;
};

document.querySelector("#pbtm").addEventListener("click", (e) => {
  let hitNum = Number(e.target.textContent);
  if (hit === hitNum) {
    increaseScore();
    getNewHit();
    createBubble();
  }
});

createBubble();
statTimer();
getNewHit();
