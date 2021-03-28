function Controller () {
  this.initialiseSea();
}

Controller.prototype.initialiseSea = function intialiseSea() {
  const backgrounds = [
    "./images/water0.png",
    "./images/water1.png",
  ];
  let backgroundIndex = 0
  window.setInterval(() => {
    document.querySelector("#viewport").style.backgroundImage = url`('${backgrounds[backgroundIndex % backgrounds.length]}')`;
  }, 1000);
};