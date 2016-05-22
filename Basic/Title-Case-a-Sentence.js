/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    var newStrWord = [];
    var newStr;
    strArray = str.toLowerCase().split(" ");
    for (var i = 0; i < strArray.length; i++) {
        strWord = strArray[i].split(""); //
        firstLetter = strWord[0].toUpperCase(); //第一项字母变大写
        strWord.shift(); //去除第一项小写字幕
        strWord.unshift(firstLetter); //插入第一项新的大写字母
        newStrWord.push(strWord.join(""));

    }
    newStr = newStrWord.join(" ");
    console.log(newStr);
    return newStr;
}

titleCase("sHoRt AnD sToUt");
