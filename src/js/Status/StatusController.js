define(['MVC/Constants', './Status', './StatusBar'], function (Constants, Status, StatusBar) {

    var StatusController = function (config) {
        config = config || {};
        this.model = new Status();
        this.model.subscribe(Constants.MODEL_CHANGED, this._modelChanged.bind(this));
        this.view = new StatusBar(config);
        this.view.bindController(this);
        this._render();
    };

    StatusController.prototype.updateStatus = function (data) {
        this.model.setData(data);
    };
    
    StatusController.prototype.clearStatus = function () {
        this.model.reset();
    };

    StatusController.prototype.getModel = function () {
        return this.model;
    };

    StatusController.prototype._render = function () {
        this.view.render();
    };
    StatusController.prototype._modelChanged = function () {
        this._render();
    };

    return StatusController;
});
