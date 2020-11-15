const Ship = require('../src/ship.js')
const Port = require('../src/port.js')

describe('Ship', () => {
    it('returns an Object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        const port = new Port('Hull');
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('can set sail', () => {
        const port = new Port('Hull');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dockShip', () => {
    it('can dock at a different port', () => {
        const Hull = new Port('Hull');
        const ship = new Ship(Hull);

        const Bergen = new Port('Bergen');
        ship.dockShip(Bergen);

        expect(ship.currentPort).toBe(Bergen);
    });
});