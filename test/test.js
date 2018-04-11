const assert = require('assert');

const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');

describe('sumOfOther', () => {
    it('throws on invalid (non-array) input', () => {
        assert.throws(() => sumOfOther('I AM INVALID'));
        assert.throws(() => sumOfOther(100500));
        assert.throws(() => sumOfOther(() => null));
        assert.throws(() => sumOfOther(null));
    });

    it('returns an array', () => {
        assert.equal(Array.isArray(sumOfOther([])), true);
    });

    it('returns same amount of items as in the input array', () => {
        assert.equal(sumOfOther([1, 2]).length, 2);
        assert.equal(sumOfOther(['a', 'b', 'c']).length, 3);
    });

    it ('yields empty array when given empty array', () => {
        assert.equal(sumOfOther([]).length, 0);
    });

    it('yields array of items which have sumOfArray - item at their respecive positions', () => {
        assert.deepEqual(sumOfOther([1, 2]), [2, 1]);
        assert.deepEqual(sumOfOther([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
        assert.deepEqual(sumOfOther(['abc', 'def']), ['def', 'abc']);
        assert.deepEqual(sumOfOther(['abc', 'def', 'ghi']), ['defghi', 'abcghi', 'abcdef']);
    });
});

describe('make', () => {
    it('Yields a function when called or curried with values', () => {
        assert.equal(make('2312', 1313)('dasd') instanceof Function, true);
        assert.equal(make('2312', {x: 10})(-5) instanceof Function, true);
        assert.equal(make(Symbol())([1, 2, 3]) instanceof Function, true);
    })

    it('Reduces a value with a reduce FN when given a function as last arg', () => {
        assert.equal(make('111', '222')('333')((a, b) => a + b), '111222333');
        assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
    });

    it('Only starts reducing when given a function as a last partially applied arg', () => {
        assert.equal(make('123')('3213')(() => null, 42) instanceof Function, true);
    });

    it('Reduces in the same order as given all the args', () => {
        assert.deepEqual(
            make(123, 456)(789)('3232')
                // Just reducing the curried args to an array
                ((acc, val) => (Array.isArray(acc) ? acc : [acc]).concat(val)),
            [123, 456, 789, '3232']
        );
    });
});
