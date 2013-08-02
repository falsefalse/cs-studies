// tower of hanoi solwer

function tower (discs) {
    function _move (n, from, to) {
        // console.log('move "%s" from "%s" to "%s"', n, from, to);
        check[to].push( check[from].pop() );
        console.log(check)
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

    var moves = 0,
        count = discs,
        check = {
            source: [],
            destination: [],
            alt: []
        };
    while (count--) {
        check.source.push(count + 1);
    }

    console.log('Solving: ', check.source);
    return move(discs, 'source', 'destination', 'alt');
}

module.exports.tower = tower;
require('./hanoi_tests.js');