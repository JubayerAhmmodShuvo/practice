/* Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false. */
/* function ArrayChallenge(arr) {
  var a = arr[0];
  var b = arr[1];
  var c = arr[2];
  var d = arr[3];
  var x = arr[4];
  var first = [];
  var second = [];
  var overlap = [];

  for (var i = a; i <= b; i++) {
    first.push(i);
  }
  for (var j = c; j <= d; j++) {
    second.push(j);
  }

  for (var k = 0; k < first.length; k++) {
    for (var l = 0; l < second.length; l++) {
      if (first[k] === second[l]) {
        overlap.push(first[k]);
      }
    }
  }

  if (overlap.length >= x) {
    return true;
  } else {
    return false;
  }
}

console.log(ArrayChallenge([5,11,1,5,1])); */

function ArrayChallenge(arr) {

  // code goes here  
   var a = arr[0];
   var b = arr[1];
   var c = arr[2];
   var d = arr[3];
   var x = arr[4];
   var first = [];
   var second = [];
   var overlap = [];

  for (var i = a; i <= b; i++) {
    first.push(j);
  }
  for (var j = c; j <= d; j++) {
    second.push(j);
  }
  for (var k = 0; k < first.length; k++) {
    for (var l = 0; l < second.length; l++) {
      if (first[k] === second[l]) {
        overlap.push(first[k]);
      }
    }
  }
  if (overlap.length >= x) {
    return true;
  } else {
    return false;
  }



}

// keep this function call here 
console.log(ArrayChallenge([5,11,1,5,1]));