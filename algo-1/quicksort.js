var fs = require('fs'),
    sort = require('../sort.js'),
    array = [];

var origin = fs
    .readFileSync('./algo-1/quicksort.txt', 'utf-8')
        .split('\r\n')
            .map(function(i) { return parseInt(i, 10); });
// new line at the end of file
origin.pop();

array = [].concat(origin);
sort.quick( array );
console.log( 'middle: ', sort.quick._comps, sort.quick._swaps, sort.quick._stack );
console.log();

array = [].concat(origin);
sort.quick( array, function(start, end) {
    return start;
} );
console.log( 'start: ', sort.quick._comps, sort.quick._swaps, sort.quick._stack );
console.log();

array = [].concat(origin);
sort.quick( array, function(start, end) {
    return end;
} );
console.log( 'end: ', sort.quick._comps, sort.quick._swaps, sort.quick._stack );
console.log();

array = [].concat(origin);
sort.quick( array, function(start, end) {
    // choose median point, the one that lies btw others
    var middle = Math.floor( (start + end) / 2);
    var s = array[start], m = array[middle], e = array[end],
        p;
    if (s > m) {
        if (s < e)
            p = start;
        // start is greater then both middle and end, decide btw middle and end
        else if (m > e)
            p = middle;
        else
            p = end;
    } else {
        if (m < e)
            p = middle;
        // middle is greater then both start and end, decide btw start and end
        else if (s > e)
            p = start;
        else
            p = end;
    }
    // console.log("%s %s %s => %s [%s,%s,%s]", s, m, e, array[p], start, middle, end);
    // console.log("[%s,%s,%s]", start, middle, end);
    return p;
} );
console.log( 'median: ', sort.quick._comps, sort.quick._swaps, sort.quick._stack );
console.log();
