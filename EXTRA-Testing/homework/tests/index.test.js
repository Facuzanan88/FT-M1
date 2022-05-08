const { checkSeatStatus, getRowNumber, book, reservedSeats, totalSeats, freeSeats, collect} = require('../homework');

it('Always true', () => {
    expect(true).toBe(true);
});

describe('checkSeatStatus', () => {
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus).toBe('function');
    });
    describe('checkSeatStatus Parameters', () => {
        it('verifity if first parameter is a String', () => {
            expect(() => checkSeatStatus(1)).toThrow(new TypeError('First parameter is not a string'))
        });
        it('Verify that the row of seats that pass us a letter and not a word or an empty string', () => {
            expect(() => checkSeatStatus('piki')).toThrow(new TypeError('The parameter habe to be only a lyrics'))
        });
        it('Verify that the row of seats that pass us a letter and not a word or an empty string', () => {
            expect(() => checkSeatStatus('')).toThrow(new TypeError('The parameter habe to be only a lyrics'))
        });
        it('The range of accepted letters is up to E', () => {
            expect(() => checkSeatStatus('J', 1)).toThrow(new TypeError('The range of accepted letters is up to E'))
        });
        it('verifity if second parameter is a Number', () => {
            expect(() => checkSeatStatus('C', 'b')).toThrow(new TypeError('Second parameter is not a number'))
        });
        it('The range of accepted letters is up to 3', () => {
            expect(() => checkSeatStatus('A', 4)).toThrow(new TypeError('The range of accepted letters is up to 3'))
        });
    });
    it('should if the seat is booked', () => {
        expect(checkSeatStatus('A', 1)).toBe(true)
    });
    it('should if the seat is booked', () => {
        expect(checkSeatStatus('E', 3)).toBe(false)
    });
});

describe('getRowNumber', () => {
    it('if receives a lyrics return a number', () => {
        expect(getRowNumber('A')).toBe(0);
    });
    it('if receives a lyrics return a number', () => {
        expect(getRowNumber('E')).toBe(4);
    });
});
describe('should return Seat in XX successfully booked if the given seat is not booked', () => {
    it('should if the seat is successfully booked', () => {
        expect(book('E', 3)).toBe('Seat in E3 successfully booked');
    });
    it('should if the seat is booked', () => {
        expect(checkSeatStatus('E', 3)).toBe(true)
    });
});

it('should if the seat is successfully booked', () => {
    expect(book('A', 1)).toBe('Seat in A1 is already booked');
});

describe('Seats Situation and collection', () => {
    it('Should number of reserved seats', () => {
        expect(reservedSeats()).toBe(10)
    });
    it('Total number of seats', () => {
        expect(totalSeats()).toBe(20)
    });
    it('should number of free seats', () => {
        expect(freeSeats()).toBe(10)
    });
    it('collect', () => {
        expect(collect()).toBe(4500)
    });
});



// en el test de la linea 31 guarda como ocupado el asiento E3 y modifica todos los balances.


