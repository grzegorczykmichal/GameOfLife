define(['../Creature'], function (Creature) {

    var LIGHTWEIGHT_SPACESHIP = [
        [0, 1, 1, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 1, 1, 0]
    ];

    var LightweightSpaceship = function (config) {
        config = config || {};
        config.pattern = LIGHTWEIGHT_SPACESHIP;
        Creature.call(this, config);
    };

    LightweightSpaceship.prototype = Object.create(Creature.prototype);
    LightweightSpaceship.prototype.constructor = Creature.prototype.constructor;

    return LightweightSpaceship;
});
