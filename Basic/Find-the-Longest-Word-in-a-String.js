/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    console.log(longest);
    return longest;

}

findLongestWord("The quick brown fox jumped over the2112211212 lazy dog");
