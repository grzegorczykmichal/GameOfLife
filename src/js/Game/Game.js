define([], function () {

    var GAME_SPEED = 100;

    var Game = function (config) {
        config = config || {};
        this.world = config.world;
        this.life = config.life;
        this.creator = config.creator;
        this.gameLoop = undefined;

    };

    Game.prototype.addCreature = function (value) {
        var creature = this.creator._create(value);
        var x = Math.floor((this.world.getWidth() - creature.getWidth()) / 2);
        var y = Math.floor((this.world.getHeight() - creature.getHeight()) / 2);
        this.world.addPattern(creature, x, y);
    };

    Game.prototype.stop = function () {
        this._stopGameLoop();
        this.world.clearPattern();
    };
    Game.prototype.start = function () {
        if (this.gameLoop === undefined) {
            this.gameLoop = setInterval(this._live.bind(this), GAME_SPEED);
        }
    };
    Game.prototype.pause = function () {
        this._stopGameLoop();
    };
    Game.prototype.nextGeneration = function () {
        if (this.gameLoop === undefined) {
            this._live();
        }
    };
    Game.prototype.restart = function () {
    };

    Game.prototype._live = function () {
        var nextGeneration = this.life.nextGeneration(this.world.getPattern());
        this.world.setPattern(nextGeneration);
    };

    Game.prototype._stopGameLoop = function () {
        if (this.gameLoop) {
            clearInterval(this.gameLoop);
        }
        this.gameLoop = undefined;
    };

    return Game;
});
