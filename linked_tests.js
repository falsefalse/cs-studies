// let us test it
var List = require('./linked.js').List;

// helpers
function _printList(list) {
    console.log('\nList:', list.size(), list.toArray());
}
function _fill(list) {
    list.push(5);
    list.push(6);
    list.push('moot');
    list.push(7);
    list.push('woot');
    console.assert(list._head.value === 5, '_head after filling')
    console.assert(list._tail.value === 'woot', '_tail after filling')
    _printList(list);
}

// onwards!
var list = new List();

_printList(list);
console.log('Size 0:', list.size());
console.log('push:', list.push('noot'));
console.log('Size 1:', list.size());
console.log('push:', list.push('noot'));
console.log('Size 2:', list.size());
list.empty();
console.log('Size test 0:', list.size());

_fill(list);
console.log( 'at(0):', list.at(0) );
console.log( 'at(3):', list.at(3) );
console.log( 'at(8):', list.at(8) );
console.assert(list.at(0) === list.head(), 'at(0) == head()'  )
console.assert(list.at(list.size() - 1) === list.tail(), 'at(size() - 1) == tail()'  )
list.empty();

_fill(list);
console.log('pop:', list.pop());
console.log('pop:', list.pop());
console.log('pop:', list.pop());
console.log('pop:', list.pop());
console.log('pop:', list.pop());
console.log('pop:', list.pop());
_printList(list);

_fill(list);
console.log('shift:', list.shift());
console.log('shift:', list.shift());
console.log('shift:', list.shift());
console.log('shift:', list.shift());
console.log('shift:', list.shift());
console.log('shift:', list.shift());
_printList(list);

var i;
list.push('only one');
_printList(list);
i = 0;
console.log('Remove [%s]: %s, length: %s', i, list.remove(i), list.size());
list.empty();

list.push('two');
list.push('items');
_printList(list);
i = 0;
console.log('Remove [%s]: %s, length: %s', i, list.remove(i), list.size());
console.log('Remove [%s]: %s, length: %s', i, list.remove(i), list.size());
console.log('Remove [%s]: %s, length: %s', i, list.remove(i), list.size());
list.empty();

_fill(list);
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 6, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 2, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 0, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 2, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 1, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
console.log('Remove [%s]\t "%s"\t-> "%s"', i = 0, list.remove(i), list.toArray());
console.assert( list.at( list.size() - 1 ) === list.tail(), 'bad _tail, removed "%s" node', i)
_printList(list);

console.log('unshift:', list.unshift(1));
console.log('unshift:', list.unshift(2));
console.log('unshift:', list.unshift(3));
console.log('unshift:', list.unshift(4));
console.log('unshift:', list.unshift(5));
console.log('unshift:', list.unshift(6));
_printList(list);
// _fill(list);

console.log('insert (0, "moot"):', list.insert(0, 'moot'), list.toArray(), list.size());
console.log('insert (0, "woot"):', list.insert(0, 'woot'), list.toArray(), list.size());
console.log('insert (8, "at 8"):', list.insert(8, 'at 8'), list.toArray(), list.size());
console.log('insert (7, "at 7"):', list.insert(7, 'at 7'), list.toArray(), list.size());
console.log('insert (1, "at one"):', list.insert(1, 'at one'), list.toArray(), list.size());
_printList(list);

while ( !list.isEmpty() ) {
    console.log('shifting:', list.shift());
}

_fill(list);
while ( !list.isEmpty() ) {
    console.log('popping:', list.pop());
}

