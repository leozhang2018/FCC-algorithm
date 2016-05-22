/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    //Convert into am  Array except arg
    var args = Array.prototype.slice.call(arguments,1);
    console.log(args);
    function test(items, index) {
        //indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1,返回在 args中找不到的参数
        return args.indexOf(items) < 0;
    }
    console.log(arr.filter(test));
    return arr.filter(test);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
