// let us test sorting

var tower = require('./hanoi.js').tower;

console.log('Solving for 1 disks, moves: %s', tower(1));
console.log();

console.log('Solving for 2 disks, moves: %s', tower(2));
console.log();

console.log('Solving for 3 disks, moves: %s', tower(3));
console.log();

console.log('Solving for 10 disks, moves: %s', tower(5));
console.log();

