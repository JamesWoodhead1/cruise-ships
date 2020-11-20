const Ship = require('../src/ship.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
    it('returns an Object', () => {
        const port = new Port('Hull');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        const port = new Port('Hull');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });
    it('gets added to port when instanced', () => {
        const hull = new Port('Hull');
        const itinerary = new Itinerary([hull]);
        const ship = new Ship(itinerary);

        expect(hull.ships).toContain(ship);
    })
});

describe('setSail', () => {
    it('can set sail', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(hull.ships).not.toContain(ship);
    });
});

describe('dockShip', () => {
    it('can dock at a different port', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dockShip();

        expect(ship.currentPort).toBe(bergen);
        expect(bergen.ships).toContain(ship);
    });
    it('cannot sail beyond its itinerary', () => {
        const hull = new Port('Hull');
        const bergen = new Port('Bergen');
        const itinerary = new Itinerary([hull, bergen])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dockShip();

        expect(() => ship.setSail()).toThrowError('Reached end of itinerary');
    });
});