/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

function largestOfFour(arr) {
    // You can do this!
    var max = 0;
    //定义新数组用以存储每一个内层数组的最大值
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        //循环找出内层数组arr[i]最大值
        for (var j = 0; j < arr[i].length; j++)
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        newArray.push(max); //内层数组最大值推入新数组
        max = 0; //max置0
    }
    console.log(newArray);
    return newArray;
}

largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
