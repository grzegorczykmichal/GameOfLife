define(['./Oscillator'], function (Oscillator) {

    var BEACON = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1]
    ];

    var Beacon = function (config) {
        config = config || {};
        config.pattern = BEACON;
        config.period = 2;
        Oscillator.call(this, config);
    };

    Beacon.prototype = Object.create(Oscillator.prototype);
    Beacon.prototype.constructor = Oscillator.prototype.constructor;

    return Beacon;
});
