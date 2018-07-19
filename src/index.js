const Cache = require('./Cache');

let createMem = (func, parameterDelimiter = '\\(^_^)/') => {
	let cache = new Cache(func, parameterDelimiter);
	let mem = cache.perform.bind(cache);
	mem.clear = () => cache.reset();
	return mem;
};

module.exports = createMem;
