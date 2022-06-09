/* Have the function StringChallenge(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: 30ns5qfz987 */

function StringChallenge(str) {
  var answer = "";
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += count + str[i];
      count = 1;
    }
  }
  var final = answer.replace(/(\d)\1/g, "");
  return final;
}


console.log(StringChallenge("aabbcde"));