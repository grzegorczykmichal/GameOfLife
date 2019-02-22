define([], function () {

    var Creature = function (config) {
        config = config || {};
        this.pattern = config.pattern || [];
        this.name = config.name || 'unknown';
    };

    Creature.prototype.getPattern = function () {
        return this.pattern;
    };

    Creature.prototype.setPattern = function (pattern) {
        this.pattern = pattern;
    };

    Creature.prototype.getName = function () {
        return this.name;
    };

    Creature.prototype.getSize = function () {
        return {height: this.getHeight(), width: this.getWidth()};
    };
    
    Creature.prototype.getHeight = function () {
        return this.pattern.length;
    };

    Creature.prototype.getWidth = function () {
        if (this.pattern.length > 0 && Array.isArray(this.pattern[0])) {
            return this.pattern[0].length;
        }
        return 0;
    };

    return Creature;
});
