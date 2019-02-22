define(['MVC/MVCModel'], function (MVCModel) {

    var DEFAULT_WIDTH = 10;
    var DEFAULT_HEIGHT = 10;

    var Grid = function (config) {
        config = config || {};
        MVCModel.call(this);
        this.size = {width: config.width || DEFAULT_WIDTH, height: config.height || DEFAULT_HEIGHT};
        this.pattern = this._initializePattern(this.size.height, this.size.width);
        this.pristine = true;
    };

    Grid.prototype = Object.create(MVCModel.prototype);
    Grid.prototype.constructor = MVCModel.prototype.constructor;

    Grid.prototype.getSize = function () {
        if (this.pristine) {
            return this.size;
        }
        var height = this.pattern.length | 0;
        var width = height > 0 ? this.pattern[0].length || 0 : 0;
        this.size = {width: width, height: height};
        return this.size;
    };

    Grid.prototype.getPattern = function () {
        if (this.pattern.length == 0) {
            this.pattern = this._initializePattern(this.size.height, this.size.width);
        }
        return this.get('pattern');
    };

    Grid.prototype.setSize = function (size) {
        this.pattern = this._initializePattern(size.height, size.width);
        this.pristine = true;
        this.set('size', size);
    };

    Grid.prototype.setPattern = function (pattern) {
        this.pristine = false;
        var height = pattern.length;
        var width = height > 0 ? pattern[0].length : 0;
        this.size = {height: height, width: width};
        this.set('pattern', pattern);
    };

    Grid.prototype.reset = function () {
        var pattern = this._initializePattern(this.size.height, this.size.width);
        this.pristine = false;
        this.set('pattern', pattern);
    };

    Grid.prototype.addGrid = function (grid, offsetX, offsetY) {

        offsetX = offsetX || 0;
        offsetY = offsetY || 0;

        var size = grid.getSize();

        if (this._gridIsToSmall({width: size.width + offsetX, height: size.height + offsetY})) {
            var newSize = Math.max(size.width + offsetX, size.height + offsetY);
            this.setSize({width: newSize, height: newSize})
        }
        var pattern = grid.getPattern();
        for (var y = 0; y < size.height; y++) {
            for (var x = 0; x < size.width; x++) {
                var lifeCell = pattern[y][x];
                if (lifeCell) {
                    this.pattern[y + offsetY][x + offsetX] = lifeCell;
                }
            }
        }

    };

    Grid.prototype._gridIsToSmall = function (size) {
        return size.width >= this.size.width && size.height >= this.size.height;
    };

    Grid.prototype._initializePattern = function (height, width) {
        var pattern = new Array(height);
        for (var h = 0; h < height; h++) {
            var tempPattern = new Array(width);
            for (var w = 0; w < width; w++) {
                tempPattern[w] = 0
            }
            pattern[h] = tempPattern;
        }
        return pattern;
    };

    return Grid;
});
