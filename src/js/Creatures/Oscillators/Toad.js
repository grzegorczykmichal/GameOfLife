define(['./Oscillator'], function (Oscillator) {

    var TOAD = [
        [0, 1, 1, 1],
        [1, 1, 1, 0]
    ];
    
    var Toad = function (config) {
        config = config || {};
        config.pattern = TOAD;
        config.period = 2;
        Oscillator.call(this, config);
    };

    Toad.prototype = Object.create(Oscillator.prototype);
    Toad.prototype.constructor = Oscillator.prototype.constructor;

    return Toad;
});
