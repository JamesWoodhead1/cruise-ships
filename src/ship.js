function Ship(currentPort) {
    this.currentPort = currentPort;
}

Ship.prototype.setSail = function () {
    this.currentPort = undefined;
}

Ship.prototype.dockShip = function (port) {
    this.currentPort = port;
}

module.exports = Ship;