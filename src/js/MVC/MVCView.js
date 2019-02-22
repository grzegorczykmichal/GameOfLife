define([], function () {

    var MVCView = function (config) {
        config = config || {};
        this.element = config.element || null;
        if (this.element === null) {
            throw new Error('No element specified for a MVCView');
        }
    };

    MVCView.prototype.bindController = function (controller) {
        this.controller = controller;
    };

    return MVCView;
});
