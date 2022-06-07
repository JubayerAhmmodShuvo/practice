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