function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('Reached end of itinerary');
    }
    this.previousPort = this.currentPort;
    this.currentPort.removeShip(this);
    this.currentPort = null;
}

Ship.prototype.dockShip = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
}

module.exports = Ship;