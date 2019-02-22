define(['./Creature'], function (Creature) {

    var NULL_PATTERN = [];

    var Loaf = function (config) {
        config = config || {};
        config.pattern = NULL_PATTERN;
        config.name = null;
        Creature.call(this, config);
    };

    Loaf.prototype = Object.create(Creature.prototype);
    Loaf.prototype.constructor = Creature.prototype.constructor;

    return Loaf;
});
