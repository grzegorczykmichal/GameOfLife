define(['../Creature'], function (Creature) {

    var SWITCH_ENGINE = [
        [0, 1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 1],
    ];

    var SwitchEngine = function (config) {
        config = config || {};
        config.pattern = SWITCH_ENGINE;
        Creature.call(this, config);
    };

    SwitchEngine.prototype = Object.create(Creature.prototype);
    SwitchEngine.prototype.constructor = Creature.prototype.constructor;

    return SwitchEngine;
});
