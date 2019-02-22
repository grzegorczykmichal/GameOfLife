define(['MVC/MVCModel'], function (MVCModel) {

    var Status = function (config) {
        config = config || {};
        MVCModel.call(this, config);
        this._initialize();
    };

    Status.prototype = Object.create(MVCModel.prototype);
    Status.prototype.constructor = MVCModel.prototype.constructor;


    Status.prototype.reset = function () {
        this._initialize();
    };

    Status.prototype._initialize = function () {
        this.generation = 0;
        this.aliveCells = 0;
        this.bornCells = 0;
        this.deadCells = 0;
    };

    return Status;
});
