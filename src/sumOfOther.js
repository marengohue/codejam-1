module.exports = function sumOfOther(args) {
    if (!Array.isArray(args)) {
        throw new TypeError('Expected array as first argument.');
    }

    // An implementation that avoids the usage of subtraction operator since it
    // is not really possible to subtract a string out of another string.
    // This works for strings as well (cause reasons and stuff and things) - see
    // ../test/test.js for details
    return args.map((val, index) => {
        const emptySymbol = Symbol();
        return args.reduce((acc, val, sumIndex) => {
            return index == sumIndex
                ? acc
                : (acc == emptySymbol ? val : acc + val);
        // Had to do empty symbol shenanigans (provide initial value)
        // so that .reduce doesn't skip the first value in the args
        // when aggregating. Symbol would be the only meaningless value that we
        // can safely discard as a non-user input.
        }, emptySymbol);
    });
}

// The simplest implementation that only works for arrays of numbers
// (According to the spec in README.md)
function sumOfOtherNumbers(args) {
    if (!Array.isArray(args)) {
        throw new TypeError('Expected array as first argument.');
    }
    
    const sum = args.reduce((acc, val) => acc + val);
    return args.map((val) => sum - val);
}