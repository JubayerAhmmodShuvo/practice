/* Have the function ArrayChallenge(strArr) take the array of strings stored in strArr, which will represent a binary tree with integer values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #. Your goal is to return the pre-order traversal of the tree with the elements separated by a space. For example: if strArr is ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"] then this tree looks like the following tree:For the input above, your program should return the string 5 2 1 9 6 8 4 because that is the pre-order traversal of the tree. */

function ArrayChallenge(strArr) {
  var tree = [];
  var result = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '#') {
      tree.push(strArr[i]);
    } else {
      tree.push(null);
    }
  }

  function traverse(tree) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] !== null) {
        result.push(tree[i]);
        traverse(tree[i + 1]);
      }
    }
  }
  traverse(tree);
  return result.join(' ');
}


console.log(ArrayChallenge(["4", "1", "5", "2", "#", "#", "#"]));