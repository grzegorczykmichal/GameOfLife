define(['../Creature'], function (Creature) {

    var BEEHIVE = [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0]
    ];

    var Beehive = function (config) {
        config = config || {};
        config.pattern = BEEHIVE;
        Creature.call(this, config);
    };

    Beehive.prototype = Object.create(Creature.prototype);
    Beehive.prototype.constructor = Creature.prototype.constructor;

    return Beehive;
});
