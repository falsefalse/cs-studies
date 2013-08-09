// http://community.topcoder.com/stat?c=problem_statement&pm=3935&rd=6532

var Node = function(string) {
    this._string = string;
    this.steps = 0;
};
Node.prototype.toString = function() { return this._string; };
function _move(word, position, direction) {
    if (position >= word.length) return word;

    var next;
    if      (word[position] == 'a' && direction == -1) next = 'z';
    else if (word[position] == 'z' && direction ==  1) next = 'a';
    else {
        next = String.fromCharCode(word.charCodeAt(position) + direction);
    }

    word = word.split('');
    word[position] = next;
    return word.join('');
}
Node.prototype.siblings = function() {
    var word = this.toString(), siblings = [];

    for (var i = 0; i < word.length; i++) {
        var nextWord = _move(word, i, 1), prevWord = _move(word, i, -1);

        if ( Node.notForbidden(nextWord) ) {
            siblings.push( new Node(nextWord) );
        }
        if ( Node.notForbidden(prevWord) ) {
            siblings.push( new Node(prevWord) );
        }
    }
    return siblings;
};

var A = 'a'.charCodeAt(0);
Node.parseForbidden = function(forbiddens) {
    Node._map = forbiddens.map(function(constraint, i) {
        var groups = constraint.split(' ');
        var map = [
            new Array(26), new Array(26), new Array(26), new Array(26)
        ];
        for (var j = 0; j < groups.length; j++) {
            var group = groups[j];
            for (var k = 0; k < group.length; k++) {
                map[j][group.charCodeAt(k) - A] = true;
            }
        }
        return map;
    });
    return Node._map;
};
function _checkWord(word, map) {
    var score = word.length;
    for (var i = 0; i < word.length; i++) {
        if (map[i][word.charCodeAt(i) - A]) score--;
    }
    return (score !== 0);
}
Node.notForbidden = function(word) {
    for (var i = 0; i < Node._map.length; i++) {
        var result = _checkWord(word, Node._map[i]);
        if (!result) return false;
    }
    return true;
};
Node.prototype.distance = function(goal) {
    var result = 0,
        word = this.toString();

    for (var i = 0; i < word.length; i++) {
        var distance = Math.abs(goal.charCodeAt(i) - word.charCodeAt(i));
        // go the other way around half past 13th letter
        if (distance > 13) distance = 26 - distance;
        result += distance;
    }
    return result;
};


function smartWords(start, finish, forbiddens) {
    Node.parseForbidden(forbiddens);
    if (!Node.notForbidden(finish)) return -1;

    var sortByDistance = function(left, right) {
        var dLeft = left.distance(finish), dRight = right.distance(finish);

        if      (dLeft < dRight) return -1;
        else if (dLeft > dRight) return  1;
        else                     return  0;
    };

    var queue = [], item;
    queue.push( new Node(start) );
    while (queue.length > 0) {
        item = queue.shift();

        if (item.toString() == finish) return item.steps;

        var siblings = item.siblings();
        for (var i = 0; i < siblings.length; i++) {
            var sibling = siblings[i];
            queue.push(sibling);
            sibling.steps = item.steps + 1;
        }
        // suboptimal, can do better sorting the queue manually on inserts
        queue = queue.sort(sortByDistance);
    }
    return -1;
}

console.log( smartWords('aaaa', 'nnmm', []) );

console.log( smartWords('aaaa', 'zzzz', ['bz a a a', 'a bz a a', 'a a bz a', 'a a a bz']) );
console.log( smartWords('aaaa', 'bbbb', ['b b b b']) );
console.log( smartWords('aaaa', 'zzzz',
             [ "a a a z",
               "a a z a",
               "a z a a",
               "z a a a",
               "a z z z",
               "z a z z",
               "z z a z",
               "z z z a" ]
 ) );
console.log( smartWords('aaaa', 'zzzz', ["bz a a a", "a bz a a", "a a bz a", "a a a bz"]) );
console.log( smartWords('aaaa', 'zzzz', [
            "cdefghijklmnopqrstuvwxyz a a a",
             "a cdefghijklmnopqrstuvwxyz a a",
             "a a cdefghijklmnopqrstuvwxyz a",
             "a a a cdefghijklmnopqrstuvwxyz"
]) );
console.log( smartWords('zzzz', 'aaaa', [
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk",
             "abcdefghijkl abcdefghijkl abcdefghijkl abcdefghijk"
]) );
