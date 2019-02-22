define(['MVC/MVCView'], function (MVCView) {

    var StatusBar = function (config) {
        config = config || {};
        MVCView.call(this, config);
    };

    StatusBar.prototype = Object.create(MVCView.prototype);
    StatusBar.prototype.constructor = MVCView.prototype.constructor;

    StatusBar.prototype.render = function () {
        var wrapper = document.createElement('div');
        var data = document.createElement('ul');
        var generation = document.createElement('li');
        var aliveCells = document.createElement('li');
        var bornCells = document.createElement('li');
        var deadCells = document.createElement('li');

        var model = this.controller.getModel();

        generation.innerHTML = 'Generation: ' + model.get('generation');
        aliveCells.innerHTML = 'Population: ' + model.get('aliveCells');
        bornCells.innerHTML = 'Born: ' + model.get('bornCells');
        deadCells.innerHTML = 'Dead: ' + model.get('deadCells');

        this.element.innerHTML = '';
        data.appendChild(generation);
        data.appendChild(aliveCells);
        data.appendChild(bornCells);
        data.appendChild(deadCells);
        wrapper.appendChild(data);
        this.element.appendChild(wrapper)
    };


    return StatusBar;
});
