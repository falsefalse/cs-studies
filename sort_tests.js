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

var a = [8,7,6,5,4,3,2,1, 8], s = shuffle(a);
s = s.concat( shuffle(a) ).concat( shuffle(a) ).concat( shuffle(a) ).concat( shuffle(a) );

// console.log( Sort.merge(a) );

console.log( a.toString() );
console.log( Sort.insertion(a) );
console.log(Sort.insertion._swaps, a.length)

console.log();
console.log( s.toString() );
console.log( Sort.insertion( s ).join(', ') );
console.log(Sort.insertion._swaps, s.length);

// console.log( Sort.quick(a) );
// console.log( Sort.merge(a) );