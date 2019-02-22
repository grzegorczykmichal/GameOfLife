define([], function () {

    var PubSub = function () {
        this.topics = {};
        this.lastUid = -1;
    };

    PubSub.prototype.publish = function (topic, data) {
        if (!this.topics.hasOwnProperty(topic)) {
            return false;
        }
        this._notify(topic, data);
        return true;
    };

    PubSub.prototype._notify = function (topic, data) {
        var subscribers = this.topics[topic];
        for (var i = 0, j = subscribers.length; i < j; i++) {
            try {
                subscribers[i].func(data);
            } catch (e) {
                console.error(e);
            }
        }
    };

    PubSub.prototype.subscribe = function (topic, func) {
        if (!this.topics.hasOwnProperty(topic)) {
            this.topics[topic] = [];
        }
        var token = (++this.lastUid).toString();
        this.topics[topic].push({token: token, func: func});
        return token;
    };

    return PubSub;

});
