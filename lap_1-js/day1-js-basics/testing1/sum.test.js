const { sum, hightestNumber, multiply, pwr, capitalize } = require('./index')

describe('test sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adding strings returns an error', () => {
        expect(sum(1, '2')).toBe("error");
        expect(sum('1', 2)).toBe("error");
    });
})

describe('test highestNumber', () => {
    test('returns highest number', () => {
        expect(hightestNumber([1, 2, 55, 4])).toBe(55);
    });
})

describe('test multiply', () => {
    test('returns corrert result', () => {
        expect(multiply(22, 4)).toBe(88);
    });
})


describe('test pwr', () => {
    test('returns correct result', () => {
        expect(pwr(2, 4)).toBe(16);
    });
})


describe('test capitalize', () => {
    test('returns capitalized str', () => {
        expect(capitalize('abcABCabc')).toBe('ABCABCABC');
    });
})
