
console.log("¡JavaScript esta funcionando correctamente!");

var s = Snap('#smiSvg');
var path = s.select('#smiPath');

var HAMBURGER = 'M6,9 L28,9 M6,17 L28,17 M6,25 L28,25';
// Split into 3 M/L segments (6 points total) to structurally match the
// hamburger path above -- the midpoint 10,21 is collinear with the real
// checkmark stroke, so visually it is still a single clean diagonal.
var CHECKMARK = 'M6,17 L10,21 M10,21 L14,25 M14,25 L28,9';

var isCheck = false;

document.getElementById('smiBtn').addEventListener('click', function () {
  isCheck = !isCheck;
  var target = isCheck ? CHECKMARK : HAMBURGER;
  var color = isCheck ? '#34d399' : '#ffffff';

  // Snap's path.animate morphs by interpolating each point of the CURRENT
  // path toward the corresponding point of the target path string, in
  // order. It works cleanly here because both strings describe three
  // 2-point line segments \u2014 same command count, same point count.
  path.animate({ d: target }, 420, mina.easeinout);
  // Stroke color fades via the CSS transition on #smiPath. Animating stroke through
  // Snap too makes it read the computed rgb() value back as a selector and throw.
  path.attr({ stroke: color });

  document.getElementById('smiState').textContent = isCheck ? 'Menu closed (checkmark)' : 'Menu closed';
});