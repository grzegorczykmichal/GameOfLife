define([], function () {

    var Layer = function (config) {
        config = config || {};
        this.grid = config.grid;
    };

    Layer.prototype.merge = function (layer) {
        this.grid.addPattern(layer.getContent())
    };

    Layer.prototype.getContent = function () {
        this.grid.getPattern();
    };

    return Layer;
});
