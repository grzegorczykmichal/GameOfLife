(function () {

    var SIZE = 500;

    var Cell = {

        _isInside: function (cord) {
            return (cord > 0 || cord < this.size.width);
        },

        _exploreVertically: function (y, x, out) {
            if (this._isInside(y)) {
                [-1, 0, 1].forEach(function (coord) {
                    if (this._isInside(x + coord)) {
                        out.push({x: x + coord, y: y});
                    }
                }.bind(this));
            }
        },

        getNeighbourhood: function (cell) {
            var x = cell.x;
            var y = cell.y;
            var neighbourhood = [];

            [-1, 0, 1].forEach(function (coord) {
                this._exploreVertically(y + coord, x, neighbourhood);
            }.bind(this));

            return neighbourhood;
        }
    };

    var EmptyPopulateStrategy = {
        populate: function (world) {
            var retVal = [];
            for (var x = 0; x < world.size.width; x++) {
                var columns = [];
                for (var y = 0; y < world.size.height; y++) {
                    columns.push(0);
                }
                retVal.push(columns);
            }
            world.world = retVal;
        }
    };

    var FullPopulateStrategy = {
        populate: function (world) {
            var retVal = [];
            for (var x = 0; x < world.size.width; x++) {
                var columns = [];
                for (var y = 0; y < world.size.height; y++) {
                    columns.push(1);
                }
                retVal.push(columns);
            }
            world.world = retVal;
        }
    };

    var ChessboardPopulateStrategy = {
        populate: function (world) {
            var retVal = [];
            for (var x = 0; x < world.size.width; x++) {
                var columns = [];
                for (var y = 0; y < world.size.height; y++) {
                    if (x % 2 === 0) {
                        if (y % 2 == 0) {
                            columns.push(1)
                        } else {
                            columns.push(0)
                        }
                    } else {
                        if (y % 2 == 0) {
                            columns.push(0)
                        } else {
                            columns.push(1)
                        }
                    }
                }
                retVal.push(columns);
            }
            world.world = retVal;
        }
    };

    var World = function (config) {
        config = config || {};
        this.size = config.size || {width: 10, height: 10};
        this.world = [];
        this.populateEmpty();
    };
    World.prototype.populate = function (populateStrategy) {
        if (populateStrategy.hasOwnProperty('populate'))
            populateStrategy.populate(this);
    };
    World.prototype.populateEmpty = function () {
        this.populate(EmptyPopulateStrategy);
    };
    World.prototype.populateFull = function () {
        this.populate(FullPopulateStrategy);
    };
    World.prototype.populateChessboard = function () {
        this.populate(ChessboardPopulateStrategy);
    };
    World.prototype.getPopulation = function () {
        var population = 0;
        this.world.forEach(function (row) {
            row.forEach(function (cell) {
                if (cell !== 0) {
                    population++;
                }
            })
        });
        return population;
    };

    var Creator = function (config) {
        this.world = config.world;
    };

    Creator.prototype.create = function (worm) {
        this.world.populate({
            populate: function (world) {
                world.world[0][0] = 1;
                world.world[0][1] = 1;
                world.world[0][3] = 1;
                world.world[1][3] = 1;
            }
        })
    };

    var Game = function (config) {
        this.ctx = this._getContext(config.canvas);
        this.turns = config.turns || 10;
        this.size = config.size || {width: 10, height: 10};
        this.xUnit = Math.floor(SIZE / this.size.width);
        this.yUnit = Math.floor(SIZE / this.size.height);
        this.world = new World(config);
        console.log(this.world);
        this.creator = new Creator({world: this.world});
        //this.world.populateEmpty();
        //this.world.populateFull();
        //this.world.populateChessboard();

       
        //console.log(this.world);
        

    };

    Game.prototype.run = function () {

        //var turn = 0;
        var ctx = this.ctx;

        //var filled, empty = this.size.width * this.size.height;
        //filled = empty;
        //while (turn < this.turns) {

        this._render(ctx);
        //this._foreachCell(function (cell, value) {
        //    if (value >= 0.5) {
        //        this._fillCell(this.ctx, cell);
        //    } else {
        //        filled--;
        //}
        //}.bind(this));
        //turn++;
        //}
        this.creator.create();

        var w = this.world.world;
        for (var x = 0; x < this.size.width; x++) {
            for (var y = 0; y < this.size.height; y++) {
                if (w[x][y] > 0) {
                    this._fillCell(this.ctx, {x: x, y: y});
                }
            }
        }
    };

    Game.prototype._render = function (ctx) {
        this._clearWorld(ctx);
        this._renderGrid(ctx);
        var cell = {x: 10, y: 10};
        //this._fillCell(ctx, cell);
        //this._countNeighbors(cell);
    };

    Game.prototype._clearWorld = function (ctx) {
        ctx.clearRect(0, 0, SIZE, SIZE);
    };

    Game.prototype._generateCells = function () {

        var world = [];
        for (var x = 0; x < this.size.width; x++) {
            var columns = [];
            for (var y = 0; y < this.size.height; y++) {
                var items = this._generateRandom(0.55);
                columns.push(items);
            }
            world.push(columns);
        }
        return world;
    };

    Game.prototype._foreachCell = function (callback) {
        var app = this;
        this.world.forEach(function (row, x) {
            row.forEach(function (column, y) {
                callback({x: x, y: y}, column)
            })
        })
    };

    Game.prototype._generateRandom = function (limit) {
        return Math.random() * (limit);
    };

    Game.prototype._renderGrid = function (ctx) {
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "#DDD";
        this._renderRows(ctx, this.size.height);
        this._renderColumns(ctx, this.size.width);

    };

    Game.prototype._renderRows = function (ctx, rows) {
        for (var r = 1; r < rows; r++) {
            this._renderRow(ctx, r * this.yUnit);
        }
    };

    Game.prototype._renderRow = function (ctx, y) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(SIZE, y);
        ctx.stroke();
    };

    Game.prototype._renderColumns = function (ctx, columns) {
        for (var c = 1; c < columns; c++) {
            this._renderColumn(ctx, c * this.xUnit);
        }
    };

    Game.prototype._renderColumn = function (ctx, x) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, SIZE);
        ctx.stroke();
    };

    Game.prototype._fillCell = function (ctx, cell) {
        var x = cell.x;
        var y = cell.y;
        if (!this._isInside(cell)) {
            return;
        }
        var width = Math.floor(SIZE / this.size.width);
        var height = Math.floor(SIZE / this.size.height);
        ctx.fillStyle = "rgb(" + 255 + "," + 165 + "," + 0 + ")";
        ctx.fillRect(x * width, y * height, width, height);
    };

    Game.prototype._findNeighbours = function (cell) {
    };

    Game.prototype._countNeighbors = function (cell) {

    };

    Game.prototype._isInside = function (cell) {
        var x = cell.x;
        var y = cell.y;
        return (x > 0 || x < this.size.width) || (y > 0 || y < this.size.height);
    };

    Game.prototype._getContext = function (elementId, context) {
        context = context || "2d";
        return document.getElementById(elementId).getContext(context);
    };

    var gol = new Game({canvas: "myCanvas", turns: 10, size: {width: 50, height: 50}});
    gol.run();

})
(window);

