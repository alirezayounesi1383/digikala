function fastdelivery() {
  let btnshow = document.querySelector("#address");
  let wall = document.querySelector("div.wall");
  let shake = document.querySelector("div.warning");
  function stop() {
    shake.classList.remove(
      "animate__animated",
      "animate__shakeX",
      "animate__slow",
    );
  }
  function start() {
    shake.classList.add(
      "animate__animated",
      "animate__shakeX",
      "animate__slow",
    );
    setTimeout(stop, 2000);
  }
  wall.addEventListener("click", start);
  btnshow.addEventListener("click", function () {
    wall.style.display = "none";
  });
}
export { fastdelivery };
