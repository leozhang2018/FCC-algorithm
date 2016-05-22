/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
    var reverseArray = [];
    //变小写后分割为数组翻转数组之后变为字符串,去空格后比较
    reverseArray = str.toLowerCase().split("").reverse().join("").replace(/[\W_]/g, "");
    return (reverseArray == str.toLowerCase().replace(/[\W_]/g, ""));
}

palindrome("0_0 (: /-\ :) 0-0");
