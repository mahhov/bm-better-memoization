const Cache = require('./Cache');

module.exports = (func, parameterDelimiter = '\\(^_^)/') => {
    let cache = new Cache(func, parameterDelimiter);
    return cache.perform.bind(cache);
};
