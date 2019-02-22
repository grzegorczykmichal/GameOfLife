define(['../Creature'], function (Creature) {

    var BOAT = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0]
    ];

    var Boat = function (config) {
        config = config || {};
        config.pattern = BOAT;
        Creature.call(this, config);
    };

    Boat.prototype = Object.create(Creature.prototype);
    Boat.prototype.constructor = Creature.prototype.constructor;

    return Boat;
});
