const Ship = require('../src/ship.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let hull;
        let bergen;
        let itinerary;
        let ship;
        beforeEach(() => {
            hull = new Port('Hull');
            bergen = new Port('Bergen');
            itinerary = new Itinerary([hull, bergen]);
            ship = new Ship(itinerary);
        })
    it('returns an Object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        expect(ship.currentPort).toBe(hull);
    });
    it('gets added to port when instanced', () => {
        expect(hull.ships).toContain(ship);
    });
});
    it('can set sail', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(hull.ships).not.toContain(ship);
    });
    it('can dock at a different port', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dockShip();

        expect(ship.currentPort).toBe(bergen);
        expect(bergen.ships).toContain(ship);
    });
    it('cannot sail beyond its itinerary', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen]);
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dockShip();

        expect(() => ship.setSail()).toThrowError('Reached end of itinerary');
    });
});