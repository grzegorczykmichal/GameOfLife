define(['../Creature'], function (Creature) {

    var GLIDER = [
        [1, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ];

    var Glider = function (config) {
        config = config || {};
        config.pattern = GLIDER;
        Creature.call(this, config);
    };

    Glider.prototype = Object.create(Creature.prototype);
    Glider.prototype.constructor = Creature.prototype.constructor;

    return Glider;
});
