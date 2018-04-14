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
});
