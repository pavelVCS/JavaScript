let arr = [1, 2, 3];

let duplicate = [0, ...arr, 7, 8]; // copy all elements of arr into duplicate

arr.push(4);

console.log('duplicate', duplicate);
console.log('arr', arr);
