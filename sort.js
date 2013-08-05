// sorting

function insertion(array) {
    // start from 1st item, 0th cosidered sorted
    for (var i = 1; i < array.length; i++) {
        var value = array[i],
            hole = i;

        // move hole for new value to be in a sorted position
        while ( hole > 0 && value < array[hole - 1] ) {
            // insert new value into sorted part, if new value is lower than the latest
            // sorted item, array[hole - 1]
            array[hole] = array[hole - 1];
            hole--;
        }
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
