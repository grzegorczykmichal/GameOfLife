define(['../Creature'], function (Creature) {

    var BLOCK = [
        [1, 1],
        [1, 1]
    ];
    
    var Block = function (config) {
        config = config || {};
        config.pattern = BLOCK;
        Creature.call(this, config);
    };

    Block.prototype = Object.create(Creature.prototype);
    Block.prototype.constructor = Creature.prototype.constructor;

    return Block;
});
