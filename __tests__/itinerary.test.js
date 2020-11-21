const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('itinerary', () => {
    it('returns an Object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
        const hull = jest.fn();
        const bergen = jest.fn();

        const itinerary = new Itinerary([hull, bergen]);

        expect(itinerary.ports).toEqual([hull, bergen]);
    });
});