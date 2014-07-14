describe("triangle", function() {
  it("will determine whether the lengths make a valid triangle", function() {
    triangle(2,8,2).should.equal("Not a triangle");
  });
  it("will determine whether the lengths make an equilateral triangle", function() {
    triangle(3,3,3).should.equal("Equilateral");
  });
  it("will determine whether the lengths make an isosceles triangle", function() {
    triangle(4,5,4).should.equal("Isosceles");
  });
  it("will determine whether the lengths make a scalene triangle", function () {
    triangle(5,4,3).should.equal("Scalene");
  });
});

