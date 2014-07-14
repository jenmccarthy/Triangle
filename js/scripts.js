var triangle = function (side1, side2, side3) {
  var sides = [side1, side2, side3].sort();
  console.log(sides);

  if(sides[2] >= sides[0] + sides[1])  {
    return "Not a triangle";
  } else if (sides[0]===sides[1] && sides[1]===sides[2]) {
    return "Equilateral";
  } else if (sides[0]===sides[1]) {
    return "Isosceles";
  } else if (sides[0]!=sides[1] && sides[0]!=sides[2]) {
    return "Scalene";
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var result = triangle(side1, side2, side3);

    $(".type-of-triangle").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
