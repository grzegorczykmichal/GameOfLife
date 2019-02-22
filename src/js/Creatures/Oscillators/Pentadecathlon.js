define(['./Oscillator'], function (Creature) {

    var PENTADECATHLON = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];
    
    var Pentadecathlon = function (config) {
        config = config || {};
        config.pattern = PENTADECATHLON;
        Creature.call(this, config);
    };

    Pentadecathlon.prototype = Object.create(Creature.prototype);
    Pentadecathlon.prototype.constructor = Creature.prototype.constructor;

    return Pentadecathlon;
});
