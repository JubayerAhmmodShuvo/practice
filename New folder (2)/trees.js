/* Have the function ArrayChallenge(strArr) take the array of strings stored in strArr, which will represent a binary tree with integer values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #. Your goal is to return the pre-order traversal of the tree with the elements separated by a space. For example: if strArr is ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"] then this tree looks like the following tree:
For the input above, your program should return the string 5 2 1 9 6 8 4 because that is the pre-order traversal of the tree. */

function ArrayChallenge(strArr) {
  var string = "";
  var array = strArr.filter(function (x) {
    return x !== "#";
  });
  for (var i = 0; i < array.length; i++) {
    string += array[i] + " ";
  }
  return string.trim();
}
console.log(ArrayChallenge(["4", "1", "5", "2", "#", "#", "#"]));