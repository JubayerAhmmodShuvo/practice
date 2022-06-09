/* StringChallenge(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: 30ns5qfz987 */

function StringChallenge(sen) {
  var longestWord = "";
  var words = sen.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(StringChallenge("fun&!! time"));