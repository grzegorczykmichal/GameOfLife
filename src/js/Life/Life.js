define([], function() {
  var Life = function(config) {
    config = config || {};
    this.status = config.status || null;
    this.generation = 0;
  };

  Life.prototype.nextGeneration = function(organism) {
    var pattern = organism.getPattern();
    this.generation = this.status.model.generation + 1;
    var size = organism.getSize();
    var height = size.height;
    var width = size.width;
    var nextGeneration = this._replicateOrganism(height, width);
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var state = pattern[y][x];
        var adhesiveCells = this.countAdhesiveCells(
          [y, x],
          pattern,
          width,
          height
        );
        nextGeneration[y][x] = this.liveOrDie(state, adhesiveCells);
      }
    }
    this._updateStatus();
    return nextGeneration;
  };

  Life.prototype._replicateOrganism = function(height, width) {
    var replicated = new Array(height);
    for (var y = 0; y < height; y++) {
      var replicatedTemp = new Array(width);
      for (var x = 0; x < width; x++) {
        replicatedTemp[x] = 0;
      }
      replicated[y] = replicatedTemp;
    }
    return replicated;
  };

  Life.prototype.countAdhesiveCells = function(cell, organism, width, height) {
    var x = cell[1];
    var y = cell[0];

    var adhesiveCells = 0;
    var adhesiveFactors = [-1, 0, 1];

    for (var i = -1; i <= 1; i++) {
      var yCord = y + i;
      for (var j = -1; j <= 1; j++) {
        var xCord = x + j;
        if (xCord === x && yCord === y) {
          continue;
        }
        if (xCord >= 0 && xCord < width && (yCord >= 0 && yCord < height)) {
          adhesiveCells += organism[yCord][xCord];
        }
      }
    }

    return adhesiveCells;
  };

  Life.prototype.liveOrDie = function(alive, adhesiveCells) {
    if (alive && (adhesiveCells === 2 || adhesiveCells === 3)) {
      return 1;
    }
    if (!alive && adhesiveCells === 3) {
      return 1;
    }
    return 0;
  };

  Life.prototype._updateStatus = function() {
    this.status &&
      this.status.updateStatus({
        generation: this.generation
      });
  };

  return Life;
});
