//1 STRING ARRAY
var quote = ["I", "am", "your", "friend"];
console.log(quote);

//2 INDEX
console.log(quote[2]);

//3 POP
quote.pop();
console.log(quote);

//4 PUSH
quote.push("father");

//5 & 6 - LOG & SAVE
console.log(quote);

//7 & 8 & 9 - Unshift and log
quote.unshift("Luke");
console.log(quote);

//10 & 11-

var erronousWord = "Luke";

//12
let lukeIsHere;
lukeIsHere = quote.find(function (element) {
  return (element = erronousWord);
});

// var findquote = [quote];
// var n = fruits.includes(err);

//13
var lukeIsAt;
