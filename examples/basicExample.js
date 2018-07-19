const m3m = require('../src/index');

let prep = () => {
	let sum = (a, b) => ({sum: a + b});
	let sum$ = m3m(sum);
	return {sum, sum$};
};

let normal = ({sum}) => {
	let sum1 = sum(10, 3);
	let sum2 = sum(10, 3);
	// sum1 !== sum2;
};

let mem = ({sum$}) => {
	let sum$1 = sum$(10, 3);
	let sum$2 = sum$(10, 3);
	// sum$1 === sum$2;
};

let memParameters = ({sum$}) => {
	let thirteen = sum$(10, 3);
	let five = sum$(2, 3);
	let eleven = sum$(10, 1);
	let elevenAgain = sum$(1, 10);
	// thirteen !== five !== eleven !== elevenAgain
};

module.exports = {
	prep: {
		func: prep, excludeReturn: true
	},
	normal: {
		func: normal
	},
	mem: {
		func: mem
	},
	parameters: {
		func: memParameters
	}
};
