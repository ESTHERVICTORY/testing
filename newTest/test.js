describe('square', function () {
    it('should return Area of a Square', function () {

        expect(square(10, 10)).to.equal(100);
    });

    it('should make sure Length is Equal to Width', function () {
        var l = 10;
        var w = 10;
        expect(square(l, w)).to.equal(100);
    });

});

describe('triangle', function () {
    it('should return the Area of a Triangle', function () {
        var b = 30;
        var h = 10;
        expect(triangle(b, h)).to.equal(150);
    });

    it('Expect B and H not to be Empty', function () {
        expect([1, 2, 3]).to.not.be.empty;
    });

});