// tower of hanoi solwer

function tower (discs) {
    var moves = 0;
    function _move (n, from, to) {
        console.log('move "%s" from "%s" to "%s"', n, from, to);
        moves++;
    }

    function move(discs, src, dest, alt) {
        if (discs === 1) {
            _move(1, src, dest);
            return moves;
        }

        move(discs - 1, src, alt, dest);
        _move(discs, src, dest);
        move(discs - 1, alt, dest, src);

        return moves;
    }
    return move(discs, 'source', 'destination', 'alt');
}

module.exports.tower = tower;
require('./hanoi_tests.js');