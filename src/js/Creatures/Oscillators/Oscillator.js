define(['../Creature'], function (Creature) {

    var Oscillator = function (config) {
        config = config || {};
        this.period = config.period;
        Creature.call(this, config);
    };

    Oscillator.prototype = Object.create(Creature.prototype);
    Oscillator.prototype.constructor = Creature.prototype.constructor;

    Oscillator.prototype.getPeriod = function () {
        return this.period;
    };

    return Oscillator;
});
