/* Have the function StringChallenge(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. */
function StringChallenge(str) {
  var str = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  var str2 = str.split("").reverse().join("");
  if (str === str2) {
    return true;
  }
  return false;
}

console.log(StringChallenge("eye"));