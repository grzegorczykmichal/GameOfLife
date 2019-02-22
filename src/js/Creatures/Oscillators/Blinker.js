define(['./Oscillator'], function (Creature) {

    var BLINKER = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ];

    var Blinker = function (config) {
        config = config || {};
        config.pattern = BLINKER;
        config.period = 3;
        Creature.call(this, config);
    };

    Blinker.prototype = Object.create(Creature.prototype);
    Blinker.prototype.constructor = Creature.prototype.constructor;

    return Blinker;
});
