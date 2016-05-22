/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/


function confirmEnding(str, target) {
    var stringLlength;
    stringLlength = target.length;
    console.log(stringLlength);
    console.log(str.substr(-stringLlength) === target);
    return str.substr(-stringLlength) === target;
}

confirmEnding("Bastian", "n");
