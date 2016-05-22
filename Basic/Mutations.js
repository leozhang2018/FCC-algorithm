/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    var count = 0;
    for (var i = 0; i < arr[1].length; i++) {
        //arr[0]左边变小写arr[1]右边字符串变小写转换成数组后遍历数组元素在arr[0]未检索到即返回错误
        if (arr[0].toLocaleLowerCase().indexOf(arr[1].toLocaleLowerCase().split("")[i]) == -1) {
            console.log("Not hit");
            return false;
        } else if (arr[0].toLocaleLowerCase().indexOf(arr[1].toLocaleLowerCase().split("")[i]) !== -1) {
            count++;

        }
    }
    if (count == arr[1].length) {
        console.log(count);
        return true;
    }

}

mutation(["hello", "hell"]);
