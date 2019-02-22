define(['MVC/MVCView'], function (MVCView) {

    var DEFAULT_COLOR = 'rgba(0,0,0)';
    var DEFAULT_FILL_FACTOR = 0.75;
    var DEFAULT_FILL_COLOR = 'rgba(164,164,164,1)';
    var DEFAULT_LINE_COLOR = 'rgba(2000,200,200,1)';

    var GridView = function (config) {
        config = config || {};
        MVCView.call(this, config);
        this.canvas = this._findCanvas();
        this.context = this.canvas.getContext('2d');
        this.i = 0;
    };

    GridView.prototype = Object.create(MVCView.prototype);
    GridView.prototype.constructor = MVCView.prototype.constructor;

    GridView.prototype.render = function () {
        this.clear();
        var unit = this.getUnit();
        this.drawGrid(unit);
        this.drawPattern(unit);
    };


    GridView.prototype.drawPattern = function (unit) {
        unit = unit || {xUnit: 1, yUnit: 1};
        var pattern = this.getPattern();
        var height = this.getHeight();
        var width = this.getWidth();
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                if (pattern[y][x] > 0) {
                    this.fillCell(x * unit.xUnit, y * unit.yUnit, null, 0.75);
                }
            }
        }
    };

    GridView.prototype.drawGrid = function (unit) {
        unit = unit || {xUnit: 1, yUnit: 1};
        var height = this.getHeight();
        var width = this.getWidth();
        for (var y = 1; y < height; y++) {
            this.drawHLine(y * unit.yUnit, this.canvas.width);
            for (var x = 1; x < width; x++) {
                this.drawVLine(x * unit.xUnit, this.canvas.height);

            }
        }
    };

    GridView.prototype.drawHLine = function (y, length) {
        this.drawLine(0, y, length, y);
    };

    GridView.prototype.drawVLine = function (x, length) {
        this.drawLine(x, 0, x, length);

    };

    GridView.prototype.drawLine = function (x, y, x1, y1, color) {
        color = color || DEFAULT_LINE_COLOR;
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x1, y1);
        this.context.strokeStyle = color;
        this.context.lineWidth = 1;
        this.context.stroke();
    };

    GridView.prototype.fillCell = function (x, y, color, fill) {

        color = color || DEFAULT_FILL_COLOR;
        this.context.fillStyle = color;

        fill = fill || DEFAULT_FILL_FACTOR;

        var unit = this.getUnit();
        var width = unit.xUnit * fill;
        var height = unit.yUnit * fill;

        var xOffset = (unit.xUnit - width) / 2;
        var yOffset = (unit.yUnit - width) / 2;

        this.context.fillRect(x + xOffset, y + yOffset, width, height);
    };

    GridView.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    };

    GridView.prototype.getUnit = function () {
        return {
            xUnit: Math.floor(this.canvas.width / this.getWidth()),
            yUnit: Math.floor(this.canvas.height / this.getHeight())
        };
    };

    GridView.prototype.getGrid = function () {
        return this.controller.getModel();
    };

    GridView.prototype.getPattern = function () {
        return this.getGrid().getPattern();
    };

    GridView.prototype.getSize = function () {
        return this.getGrid().get('size');
    };

    GridView.prototype.getWidth = function () {
        return this.getSize().width;
    };

    GridView.prototype.getHeight = function () {
        return this.getSize().height;
    };

    GridView.prototype._findCanvas = function () {
        var canvas = this.element.querySelector('canvas');
        if (canvas === null) {
            canvas = document.createElement('canvas');
            canvas.width = this.element.clientWidth;
            canvas.height = this.element.clientHeight;
            this.element.appendChild(canvas);
        }
        return canvas;
    };


    return GridView;
});
