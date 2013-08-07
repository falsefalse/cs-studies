// let us test sorting

var Sort = require('./sort.js');

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

var a, b, c, d, s = [], l = [];
function _fill () {
    a = [88, 8,70,0,0,6,5,4,3,2,1];
    b = [1,2,3,4,5];
    c = [0,1,3];
    d = [8,7,6,5,4,3,14];

    s = shuffle(a);

    l = []
        .concat( shuffle(a) )
        .concat( shuffle(a) )
        .concat( shuffle(b) )
        .concat( shuffle(b) )
        .concat( shuffle(c) )
        .concat( shuffle(c) )
        .concat( shuffle(d) )
        .concat( shuffle(d) )
    ;
}

console.log('== Merge sort')

_fill();
console.log( a.toString(), a.length );
console.log( Sort.merge(a) );
console.log();

_fill();
console.log( l.toString(), l.length );
console.log( Sort.merge(l).join(', ') );
console.log();

console.log('== Insertion sort')

_fill();
console.log( a.toString() );
console.log( Sort.insertion(a) );
console.log(Sort.insertion._swaps, a.length)
console.log();

_fill();
console.log( l.toString() );
console.log( Sort.insertion( l ).join(', ') );
console.log(Sort.insertion._swaps, l.length);
console.log();

// console.log( Sort.quick(a) );
// console.log( Sort.merge(a) );