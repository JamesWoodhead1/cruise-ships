const Port = require('../src/port.js')

describe('port', () => {
    it('returns an Object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('Has a name', () => {
        const port = new Port('Bergen');

        expect(port.name).toBe('Bergen');
    });
});