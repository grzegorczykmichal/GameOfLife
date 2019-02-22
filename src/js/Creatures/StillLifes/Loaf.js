define(['../Creature'], function (Creature) {

    var LOAF = [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 0]
    ];

    var Loaf = function (config) {
        config = config || {};
        config.pattern = LOAF;
        Creature.call(this, config);
    };

    Loaf.prototype = Object.create(Creature.prototype);
    Loaf.prototype.constructor = Creature.prototype.constructor;

    return Loaf;
});
