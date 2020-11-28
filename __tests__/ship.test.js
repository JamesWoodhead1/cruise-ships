const Ship = require('../src/ship.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let hull;
        let bergen;
        let itinerary;
        let ship;
        let port;
        beforeEach(() => {
            port = {
                removeShip: jest.fn(),
                addShip: jest.fn(),
            };

            hull = {
                ...port,
                name: 'Hull',
                ships: []
            };

            bergen = {
                ...port,
                name: 'Bergen',
                ships: []
            };

            itinerary = {
                ports: [hull, bergen]
            };
            
            ship = new Ship(itinerary);
        });
    it('returns an Object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('Has a starting port', () => {
        expect(ship.currentPort).toBe(hull);
    });
    it('gets added to port when instanced', () => {
        expect(port.addShip).toHaveBeenCalledWith(ship);
    });
    it('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(hull.removeShip).toHaveBeenCalledWith(ship);
    });
});
});
describe('dockShip', () => {
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