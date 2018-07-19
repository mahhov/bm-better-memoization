class Cache {
	constructor(handler, parameterDelimiter) {
		this.cache = {};
		this.handler = handler;
		this.parameterDelimiter = parameterDelimiter;
	}

	reset() {
		this.cache = {};
	}

	formKey(...parameters) {
		return parameters.reduce((a, b) => `${a}${this.parameterDelimiter}${b}`, '');
	}

	isCached(key) {
		return this.cache.hasOwnProperty(key);
	}

	getCached(key) {
		return this.cache[key];
	}

	setCache(key, value) {
		this.cache[key] = value;
	}

	perform(...parameters) {
		let key = this.formKey(...parameters);
		if (this.isCached(key))
			return this.getCached(key);
		let result = this.handler(...parameters);
		this.setCache(key, result);
		return result;
	}
}

module.exports = Cache;
