/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) { // LBH QVQ VG!
   var Array=[];
   //过滤器,过滤掉各种标点符号("",".",","?","!"),如果不是符号则按照 ROT 13 规则返回对应 unicode
   function filter(arg){
       return  (arg!=32&&arg!=46&&arg!=63&&arg!=33)?((arg>77)?arg-13:arg+13):(arg);
   }

   for(var i=0;i<str.length;i++){
       console.log(str.charCodeAt(i)+"num:"+i);
       Array.push(filter(str.charCodeAt(i)));
   }

   //console.log(Array);
   //console.log(Array.join(","));
   //newString=Array.join(",");
   //console.log(typeof newString);
   //console.log("Space:"+"!".charCodeAt(0));
   console.log(String.fromCharCode.apply(null, Array));
   return String.fromCharCode.apply(null, Array);
}
