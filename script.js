const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Deep Breath In...";
  container.className = "container grow";

  setTimeout(() => {
    // setTimeout (function, duration)
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Let it Out...";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime); // setInterval (function, duration)
