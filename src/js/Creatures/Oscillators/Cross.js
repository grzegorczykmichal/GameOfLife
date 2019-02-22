define(['./Oscillator'], function (Creature) {

    var CROSS = [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ];

    var Cross = function (config) {
        config = config || {};
        config.pattern = CROSS;
        Creature.call(this, config);
    };

    Cross.prototype = Object.create(Creature.prototype);
    Cross.prototype.constructor = Creature.prototype.constructor;

    return Cross;
});
