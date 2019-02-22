define(['PubSub/PubSub', './Constants'], function (PubSub, Constants) {

    var MVCModel = function () {
        PubSub.call(this);
    };

    MVCModel.prototype = Object.create(PubSub.prototype);
    MVCModel.prototype.constructor = PubSub.prototype.constructor;

    MVCModel.prototype.get = function (property) {
        if (this.hasOwnProperty(property)) {
            return this[property];
        }
    };

    MVCModel.prototype.set = function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
            this.publish(Constants.MODEL_CHANGED);
        }
    };

    MVCModel.prototype.setData = function (data) {
        for (var field in data) {
            if (data.hasOwnProperty(field) && this.hasOwnProperty(field)) {
                this[field] = data[field];
            }
        }
        this.publish(Constants.MODEL_CHANGED);
    };


    return MVCModel;
});
