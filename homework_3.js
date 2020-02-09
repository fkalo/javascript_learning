var points = new Array(100);
var len = points.length;

for(var i = 0; i < 100; i++){
  points[i] = (i + 1) + '. elem ';
}

for(var i = 20; i = 40; i++){
  console.log(points[i]);
}

// foreach hasznalataval nem lehet megcsinalni, mert vegigiteralja az egeszet
points.foreach(myFunction);
function myFunction(value) {
  value
}

var len = points.length;
  console.log(len);

var type1 = typeof points [0];
  console.log(type1);

points.sort();
points.reverse();

var newpoints = [];
for(var i = 10; i = 15; i++){
  newpoints.push(points [i]);
}
var result = newpoints.join(" + ");
