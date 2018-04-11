module.exports = function make(...args) {
    const argCount = args.length;
    if (args[argCount - 1] instanceof Function) {
        const reduceFn = args[argCount - 1];
        return args
            .slice(0, argCount - 1)
            .reduce(reduceFn);
    } else {
        return make.bind(this, ...args);
    }
}