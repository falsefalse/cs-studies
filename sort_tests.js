// let us test sorting

function shuffle(array) {
  var shuffled = [], rand, i, value;
  for (i = 0; i < array.length; i++) {
    value = array[i];
    if (i == 0) {
      shuffled[0] = value;
    } else {
      rand = Math.floor(Math.random() * (i + 1));
      shuffled[i] = shuffled[rand];
      shuffled[rand] = value;
    }
  }
  return shuffled;
};

var Sort = require('./sort.js');

var a = [7,6,5,4,3,2,1, 8];
console.log( Sort.insertion(a) );
console.log()
var s = shuffle(a);
console.log( s.toString(), Sort.insertion( s ) );

// console.log( Sort.quick(a) );
// console.log( Sort.merge(a) );