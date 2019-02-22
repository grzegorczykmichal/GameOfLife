define([
    './StillLifes/Beehive',
    './StillLifes/Block',
    './StillLifes/Boat',
    './StillLifes/Loaf',
    './Oscillators/Beacon',
    './Oscillators/Blinker',
    './Oscillators/Cross',
    './Oscillators/KoksGalaxy',
    './Oscillators/Mold',
    './Oscillators/Pentadecathlon',
    './Oscillators/Pinwheel',
    './Oscillators/Pulsar',
    './Oscillators/Toad',
    './Spaceships/Dart',
    './Spaceships/Glider',
    './Spaceships/LightweightSpaceship',
    './Guns/GosperGliderGun',
    './Methuselahs/SwitchEngine',
    './Wicks/Ant',
    './Puffers/NoahsArk',
    './Puffers/Pufferfish',
    './NullCreature',
], function (Beehive,
             Block,
             Boat,
             Loaf,
             Beacon,
             Blinker,
             Cross,
             KoksGalaxy,
             Mold,
             Pentadecathlon,
             Pinwheel,
             Pulsar,
             Toad,
             Dart,
             Glider,
             LightweightSpaceship,
             GosperGliderGun,
             SwitchEngine,
             Ant,
             NoahsArk,
             Pufferfish,
             NullCreature) {


    var Creator = function () {
        this.creatures = {};
        this.names = [
            'beehive',
            'block',
            'boat',
            'loaf',
            'beacon',
            'blinker',
            'cross',
            'koksGalaxy',
            'mold',
            'pentadecathlon',
            'pinwheel',
            'pulsar',
            'toad',
            'dart',
            'glider',
            'lightweightSpaceship',
            'gosperGliderGun',
            'switchEngine',
            'ant',
            'noahsArk',
            'pufferfish',
        ];
    };

    Creator.prototype.createBlock = function () {
        return this.createCreature('block');
    };

    Creator.prototype.createBeehive = function () {
        return this.createCreature('beehive');
    };

    Creator.prototype.createBoat = function () {
        return this.createCreature('boat');
    };

    Creator.prototype.createLoaf = function () {
        return this.createCreature('loaf');
    };

    Creator.prototype.createBeacon = function () {
        return this.createCreature('beacon');
    };

    Creator.prototype.createBlinker = function () {
        return this.createCreature('blinker');
    };

    Creator.prototype.createCross = function () {
        return this.createCreature('cross');
    };

    Creator.prototype.createKoksGalaxy = function () {
        return this.createCreature('koksGalaxy');
    };

    Creator.prototype.createMold = function () {
        return this.createCreature('mold');
    };

    Creator.prototype.createPentadecathlon = function () {
        return this.createCreature('pentadecathlon');
    };

    Creator.prototype.createPinwheel = function () {
        return this.createCreature('pinwheel');
    };

    Creator.prototype.createPulsar = function () {
        return this.createCreature('pulsar');
    };

    Creator.prototype.createToad = function () {
        return this.createCreature('toad');
    };

    Creator.prototype.createGlider = function () {
        return this.createCreature('glider');
    };

    Creator.prototype.createDart = function () {
        return this.createCreature('dart');
    };

    Creator.prototype.createLightweightSpaceship = function () {
        return this.createCreature('lightweightSpaceship');
    };

    Creator.prototype.createGosperGliderGun = function () {
        return this.createCreature('gosperGliderGun');
    };

    Creator.prototype.createSwitchEngine = function () {
        return this.createCreature('switchEngine');
    };

    Creator.prototype.createAnt = function () {
        return this.createCreature('ant');
    };
    Creator.prototype.createNoahsArk = function () {
        return this.createCreature('noahsArk');
    };

    Creator.prototype.createPufferfish = function () {
        return this.createCreature('pufferfish');
    };

    Creator.prototype.createCreature = function (creature) {
        return this._create(creature);
    };


    Creator.prototype._create = function (name) {

        var config = {name: name};

        switch (name) {
            case 'beehive':
                return new Beehive(config);
                break;
            case 'block':
                return new Block(config);
                break;
            case 'boat':
                return new Boat(config);
                break;
            case 'loaf':
                return new Loaf(config);
                break;
            case 'beacon':
                return new Beacon(config);
                break;
            case 'blinker':
                return new Blinker(config);
                break;
            case 'cross':
                return new Cross(config);
                break;
            case 'koksGalaxy':
                return new KoksGalaxy(config);
                break;
            case 'mold':
                return new Mold(config);
                break;
            case 'pentadecathlon':
                return new Pentadecathlon(config);
                break;
            case 'pinwheel':
                return new Pinwheel(config);
                break;
            case 'pulsar':
                return new Pulsar(config);
                break;
            case 'toad':
                return new Toad(config);
                break;
            case 'dart':
                return new Dart(config);
                break;
            case 'glider':
                return new Glider(config);
                break;
            case 'lightweightSpaceship':
                return new LightweightSpaceship(config);
                break;
            case 'gosperGliderGun':
                return new GosperGliderGun(config);
                break;
            case 'switchEngine':
                return new SwitchEngine(config);
                break;
            case 'ant':
                return new Ant(config);
                break;
            case 'noahsArk':
                return new NoahsArk(config);
                break;
            case 'pufferfish':
                return new Pufferfish(config);
                break;
            default:
                return new NullCreature(config);
        }

    };

    return Creator;
});
