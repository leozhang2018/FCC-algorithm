/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
*/

function repeatStringNumTimes(str, num) {
    // repeat after me
    var result = [];
    if (num < 0) {
        return "";
    } else
        for (var i = 0; i < num; i++) {
            result = str.concat(result);
        }
    console.log(result);
    return result;
}

repeatStringNumTimes("abc", 3);
