/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArray = [];
    console.log(arr.slice(0, size));
    console.log(arr.slice(size, arr.length));
    var j = 0;
    //切几次,长度/分片的大小
    for (var i = 0; i < arr.length / size; i++) {
        //推入新数组[)
        newArray.push(arr.slice(j, j + size));
        //保存切完后的数组下标
        j += size;
    }
    console.log(newArray);
    return newArray;


}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3);
