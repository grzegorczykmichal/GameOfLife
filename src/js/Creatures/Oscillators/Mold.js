define(['./Oscillator'], function (Creature) {

    var MOLD = [
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0],
    ];

    var Mold = function (config) {
        config = config || {};
        config.pattern = MOLD;
        Creature.call(this, config);
    };

    Mold.prototype = Object.create(Creature.prototype);
    Mold.prototype.constructor = Creature.prototype.constructor;

    return Mold;
});
