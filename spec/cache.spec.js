const mem = require('../src/index');

describe('cache', () => {
	it('cache', () => {
		let sumSpy = jasmine.createSpy('spy1');
		sumSpy.and.callFake((a, b) => a + b);
		let memed = mem(sumSpy);

		expect(sumSpy).not.toHaveBeenCalled();
		expect(memed(10, 20)).toEqual(30);
		expect(memed(10, 20)).toEqual(30);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(20, 10)).toEqual(30);
		expect(memed(20, 10)).toEqual(30);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(10, 20)).toEqual(30);
		expect(memed(20, 10)).toEqual(30);
		expect(memed(20, 20)).toEqual(40);
		expect(memed(20, 20)).toEqual(40);
		expect(sumSpy).toHaveBeenCalledTimes(3);
	});

	it('same obj', () => {
		let sum = (a, b) => ({sum: a + b});
		let sum$ = mem(sum);

		let sum$1 = sum$(10, 3);
		let sum$2 = sum$(10, 3);
		expect(sum$1).toBe(sum$2);
	});

	it('clear', () => {
		let sum = (a, b) => ({sum: a + b});
		let sum$ = mem(sum);

		let sum$1 = sum$(10, 3);
		sum$.clear(sum$);
		let sum$2 = sum$(10, 3);
		let sum$3 = sum$(10, 3);
		expect(sum$1).not.toBe(sum$2);
		expect(sum$2).toBe(sum$3);
	});

	it('no params', () => {
		let sum = () => ({value: 10});
		let sum$ = mem(sum);

		let sum$1 = sum$();
		let sum$2 = sum$();
		sum$.clear(sum$);
		let sum$3 = sum$();
		let sum$4 = sum$();
		expect(sum$1).toBe(sum$2);
		expect(sum$2).not.toBe(sum$3);
		expect(sum$3).toBe(sum$4);
	});
});
