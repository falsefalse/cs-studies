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
    function _merge(array, start1, end1, start2, end2) {
        var i1 = start1, i2 = start2, result = [],
            left, right;
        console.log('_merge', start1, end1, start2, end2);

        var result = [];
        while (start1 <= end1 || start2 <= end2) {
            left = array[start1];
            right = array[start2];

            // shortcircuit to the opposite part
            // when we're out of values
            if (start1 > end1) left = +Infinity;
            if (start2 > end2) right = +Infinity;

            if (left <= right) {
                result.push(left);
                start1++;
            } else {
                result.push(right);
                start2++;
            }
        }

        return result;
    }
    function _sort(array, start, end) {
        // got 2 items, swap and return up
        if (start + 1 == end) {
            var temp = array[end];
            if (array[start] > array[end]) {
                array[end] = array[start];
                array[start] = temp;
            }
            return;
        }

        var middle = Math.floor((start + end) / 2);
        // sort fist part
        _sort(array, start, middle);
        // 2nd part needs sorting if it has more than one item
        // otherwise _merge cares about 2+1 case
        if (middle + 1 < end) {
            _sort(array, middle + 1, end);
        }

        var merged = _merge(array, start, middle, middle + 1, end);
        // copy merged values over to the array
        [].splice.apply(array, [start, merged.length].concat(merged));
        return array;
    }

    return _sort(array, 0, array.length - 1);
}

module.exports = {
    insertion: insertion,
    quick: quick,
    merge: merge
}

// execute tests
require('./sort_tests.js');
