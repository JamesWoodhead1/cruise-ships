const Port = require('../src/port.js')

describe('port', () => {
    it('returns an Object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('Has a name', () => {
        const port = new Port('Bergen');

        expect(port.name).toBe('Bergen');
    });
    it('can add a ship', () => {
        const port = new Port('Hull');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Hull');
        const titanic = {};
        const queenElizabeth = {};

        port.addShip(titanic);
        port.addShip(queenElizabeth);
        port.removeShip(queenElizabeth);

        expect(port.ships).toEqual([titanic]);
    })
});