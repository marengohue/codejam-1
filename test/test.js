const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

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
    })
});