define(['../Creature'], function (Creature) {

    var ANT = [
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1],
        [1, 1, 0, 0]
    ];

    var Ant = function (config) {
        config = config || {};
        config.pattern = ANT;
        Creature.call(this, config);
    };

    Ant.prototype = Object.create(Creature.prototype);
    Ant.prototype.constructor = Creature.prototype.constructor;

    return Ant;
});
