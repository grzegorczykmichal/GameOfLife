define(['MVC/Constants', './GridView', './Grid'], function (Constants, GridView, Grid) {

    var GridController = function (config) {
        config = config || {};

        this.grid = config.grid || new Grid(config);
        this.grid.subscribe(Constants.MODEL_CHANGED, this._modelChanged.bind(this));

        this.view = config.view || new GridView(config);
        this.view.bindController(this);

    };

    GridController.prototype.changePattern = function (pattern) {
        this.grid.setPattern(pattern);
    };

    GridController.prototype.clearPattern = function () {
        this.grid.reset();
    };

    GridController.prototype.addPattern = function (pattern, offsetX, offsetY) {
        this.grid.addGrid(pattern, offsetX, offsetY);
        this._render();
    };

    GridController.prototype.changeSize = function (size) {
        this.grid.setSize(size);
    };

    GridController.prototype.getModel = function () {
        return this.grid;
    };

    GridController.prototype._render = function () {
        this.view.render();
    };
    GridController.prototype._modelChanged = function () {
        this._render();
    };

    return GridController;
});
