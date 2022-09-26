const { fizzbuzz } = require('../fizzbuzz.js');


describe('test fizzbuzz', () => {
    it('fizzbuzz should be defined', () => {
        expect(fizzbuzz).toBeDefined();
    });
    
    it('fizzbuzz should be a function', () => {
        expect(typeof fizzbuzz).toBe('function');
    });

    it('fizzbuzz should return the num if not multiple of 3 or 5', () => {
        expect(fizzbuzz(2)).toBe(2);
        expect(fizzbuzz(88)).toBe(88);
    });

    it('fizzbuzz should return "Fizz" if multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(99)).toBe('Fizz');
    });

    it('fizzbuzz should return "Buzz" if multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(50)).toBe('Buzz');
    });

    it('fizzbuzz should return "Buzz" if multiple of 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(45)).toBe('FizzBuzz');
    });
});
