require([
  "Grid/Grid",
  "Grid/GridController",
  "Grid/GridView",
  "Status/StatusController",
  "Life/Life",
  "Creatures/Creator",
  "World/World",
  "Game/Game"
], function(
  Grid,
  GridController,
  GridView,
  StatusController,
  Life,
  Creator,
  World,
  Game
) {
  var game = null;

  const SPEED = 100;

  var heightInput = document.querySelector(".height");
  var widthInput = document.querySelector(".width");
  var startBtn = document.querySelector(".start");
  var pauseBtn = document.querySelector(".pause");
  var stopBtn = document.querySelector(".stop");
  var nextBtn = document.querySelector(".next");
  var restartBtn = document.querySelector(".restart");
  var creatures = document.querySelector(".creatures");
  var addBtn = document.querySelector(".add");

  var grid = new Grid({
    width: widthInput.value | 0,
    height: heightInput.value | 0
  });

  var gridView = new GridView({
    element: document.querySelector(".app .test")
  });

  var gridController = new GridController({ grid: grid, view: gridView });

  var world = new World({ layers: [gridController] });

  var creator = new Creator();

  var status = new StatusController({
    element: document.querySelector("footer")
  });
  var life = new Life({ status: status });

  var game = new Game({ world: world, life: life, creator: creator });

  //var creator = new Creator();
  //
  var names = creator.names;
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var c = document.createElement("option");
    c.value = name;
    c.innerHTML = name;
    creatures.appendChild(c);
  }
  //
  var controller = new GridController({
    width: widthInput.value | 0,
    height: heightInput.value | 0,
    element: document.querySelector(".app .test")
  });
  var status = new StatusController({
    element: document.querySelector("footer")
  });
  //
  var life = new Life({ status: status });

  var pauseGame = function stopHandler() {
    clearInterval(game);
    game = null;
    startBtn.disabled = false;
  };

  var stopGame = function stopHandler() {
    status.clearStatus();
    controller.clearPattern();
    clearInterval(game);
    game = null;
    startBtn.disabled = false;
  };

  if (creatures) {
    creatures.addEventListener("change", function(e) {
      game.addCreature(e.target.value);
    });
  }

  widthInput.addEventListener("change", function(e) {
    var value = e.target.value;
    controller.changeSize({ width: value, height: heightInput.value });
  });

  heightInput.addEventListener("change", function(e) {
    var value = e.target.value;
    controller.changeSize({ height: value, width: widthInput.value });
  });

  if (nextBtn)
    nextBtn.addEventListener("click", function(e) {
      e.preventDefault();
      game.nextGeneration();
    });

  if (startBtn)
    startBtn.addEventListener("click", function(e) {
      e.preventDefault();
      game.start();
    });

  if (addBtn)
    addBtn.addEventListener("click", function(e) {
      e.preventDefault();
      console.log(creatures.value);
      game.addCreature(creatures.value);
    });

  if (pauseBtn)
    pauseBtn.addEventListener("click", function(e) {
      e.preventDefault();
      game.pause();
    });

  if (stopBtn)
    stopBtn.addEventListener("click", function(e) {
      e.preventDefault();
      game.stop();
    });
});
