const Ship = require('../src/ship.js')

describe('Ship', () => {
    it('returns an Object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        const ship = new Ship('Hull');

        expect(ship.startingPort).toBe('Hull');
    });
});

describe('setSail', () => {
    it('can set sail', () => {
        const ship = new Ship('Hull');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});