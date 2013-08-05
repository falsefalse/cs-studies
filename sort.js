// sorting

function insertion(array) {
    insertion._swaps = 0;
    // start from 1st item, 0th cosidered sorted
    for (var i = 1; i < array.length; i++) {
        var value = array[i],
            hole = i;

        while ( hole > 0 && value < array[hole - 1] ) {
            // move sorted item one place forward
            // freeing index for the current value
            array[hole] = array[hole - 1];
            insertion._swaps++;
            // advance to previous sorted item
            hole--;
        }
        // put the current value before the first sorted item (array[hole])
        // note that hole is decremented at the end of while loop
        // thus m
        array[hole] = value;
    };
    return array;
}

function quick(array) {
    return array;
}

function merge(array) {
    return array;
}

module.exports = {
    insertion: insertion,
    quick: quick,
    merge: merge
}

// execute tests
require('./sort_tests.js');
