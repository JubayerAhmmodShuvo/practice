/* Have the function ArrayChallenge(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence. */

/* function ArrayChallenge(arr) {
  var longest = 0;
  var current = 0;
  for (var i = 0; i < arr.length; i++) {
    current = 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        current++;
      }
    }
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
}

console.log(ArrayChallenge([9, 9, 4, 2])); */
function ArrayChallenge(arr) {
  var lis = [];
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    lis[i] = 1;
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
    max = Math.max(max, lis[i]);
  }
  return max;
}

console.log(ArrayChallenge([4, 3, 5, 1, 6])); // 3
console.log(ArrayChallenge([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]1)); // 3