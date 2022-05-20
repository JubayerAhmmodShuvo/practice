var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var max = 0;
function findMax(ar) {
  for (var i = 0; i < ar.length; i++) {
    if (Array.isArray(ar[i])) {
      findMax(ar[i]);
    }
    if (ar[i] > max) {
      max = ar[i];
    }
  }
  return max;
}
console.log(findMax(ar));
