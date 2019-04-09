function playsoud(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio); //stops audio the function from running all together.
  audio.currentTime = 0; // rewinds to the start.
  audio.play();
  console.log(key);
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // stop it if it is not a transform.
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playsoud);
