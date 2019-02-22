define([], function () {

    var World = function (config) {
        config = config || {};
        this.layers = config.layers || [];
       
    };

    World.prototype.getPattern = function () {
        return this.layers[0].getModel();
    };

    World.prototype.setPattern = function (pattern) {
        return this.layers[0].changePattern(pattern);
    };

    World.prototype.clearPattern = function () {
        this.layers.forEach(function (layer) {
            layer.clearPattern();
        })
    };

    World.prototype.getWidth = function () {
        return this.layers[0].getModel().getSize().width;
    };

    World.prototype.getHeight = function () {
        return this.layers[0].getModel().getSize().height;
    };

    World.prototype.addPattern = function (pattern, x, y) {
        return this.layers[0].addPattern(pattern, x, y);
    };

    //World.prototype.addLayer = function (layer) {
    //    this.layers.push(layer);
    //};
    //
    //World.prototype.mergeAllLayers = function () {
    //    var mergedLayer = new Layer();
    //    for (var i = 0; i < this.layers.length; i++) {
    //        var layer = this.layers[i];
    //        mergedLayer.merge(layer);
    //    }
    //    this.layers = [mergedLayer];
    //};


    return World;
});
