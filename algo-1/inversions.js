var fs = require('fs'),
    sort = require('../sort.js')

var array = fs
    .readFileSync('./algo-1/IntegerArray.txt', 'utf-8')
        .split('\r\n')
            .map(function(i) { return parseInt(i, 10) });
// new line at the end of file
array.pop();

var A = [3,1,5,4,2,6];
var B = [6,5,4,3,2,1];

console.log( sort.merge( A ), sort.merge._inversions, sort.merge._stack, sort.merge._merges );
console.log()
console.log( sort.merge( B ), sort.merge._inversions, sort.merge._stack, sort.merge._merges );
console.log()
console.log( sort.merge( array ), sort.merge._inversions, sort.merge._stack, sort.merge._merges );
