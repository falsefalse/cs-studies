// linked list
var u = require('./util.js');

var List = function() {
    return this.empty();
};

function newItem(value) {
    return {
        value: value, next: null
    };
}

List.prototype.toArray = function() {
    var nextP = this._head, result = [];
    while (nextP) {
        result.push(nextP.value);
        nextP = nextP.next;
    }
    return result;
};

List.prototype.isEmpty = function() {
    return (this._head === null);
};
List.prototype.empty = function() {
    return this._head = this._tail = null;
};
List.prototype.head = function() {
    return (this._head) ? this._head.value : null;
};
List.prototype.tail = function() {
    return (this._tail) ? this._tail.value : null;
};
List.prototype.size = function() {
    if (!this._head) return 0;

    var size = 0, currentP = this._head;
    while (currentP) {
        size++;
        currentP = currentP.next;
    }
    return size;
};
List.prototype.at = function(index) {
    index = index || 0;
    var currentP = this._head, count = 0;
    while (currentP) {
        if (count === index) return currentP.value;
        currentP = currentP.next;
        count++;
    }
    // index out of bounds
    return null;
};

// Exercises

// Insert
List.prototype.push = function(value) {
    if (!value) return null;
    var item = newItem(value);
    if (this._head !== null) {
        this._tail.next = item;
        this._tail = item;
    } else {
        this._head = this._tail = item;
    }
    return this._tail.value;
};
List.prototype.unshift = function(value) {
    if (!value) return null;

    if (!this._head)
        return this.push(value);

    var item = newItem(value);
    item.next = this._head;
    this._head = item;
    return this._head.value;
};
List.prototype.insert = function(index, value) {
    if (index === undefined || value === undefined)
        return null;

    if (index === 0)
        return this.unshift(value);

    var count = 1, prevP = this._head, currentP = this._head.next,
        item = newItem(value);
    while (currentP) {
        console.log('--count', count)
        if (index === count) {
            prevP.next = item;
            item.next = currentP;
            return item.value;
        } else if (count > index) {
            // not sure about that
            return null;
        }
        prevP = currentP;
        currentP = currentP.next;
        count++;
    }
}

// Remove
List.prototype.pop = function() {
    if (!this._head)
        return null;
    if (this._head === this._tail)
        return this.shift();

    var tail, currentP = this._head;
    while (currentP.next !== this._tail)
        currentP = currentP.next;

    tail = this._tail;
    this._tail = currentP;
    return tail.value;
};
List.prototype.shift = function() {
    if (!this._head) return null;

    var temp;
    if (this._head === this._tail) {
        temp = this._head;
        this._head = this._tail = null;
        return temp.value;
    } else {
        head = this._head;
        this._head = this._head.next;
        return head.value;
    }
};
List.prototype.remove = function(index) {
    if (index === undefined || !this._head)
        return null;

    if (index === 0) {
        return this.shift();
    }

    var count = 1,
        prevP = this._head, currentP = this._head.next, nextP = null;

    while (currentP) {
        nextP = currentP.next;
        if (count === index) {
            prevP.next = nextP;
            // removing the last one - update the _tail
            // nextP would be `null` in this case, so we're good with prev-prev. line
            if (!nextP)
                this._tail = prevP;

            return currentP.value;
        } else if (count > index) {
            return null;
        }
        prevP = currentP;
        currentP = currentP.next;
        count++;
    }
    // not found
    return null;
};

module.exports.List = List;
// run tests right away, hate to switch tabs for that
var test = require('./linked_tests.js');