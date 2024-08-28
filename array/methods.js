let arr = [1, 2, 3];

let duplicate = [0, ...arr, 7, 8]; // copy all elements of arr into duplicate

arr.push(4);

// console.log('duplicate', duplicate);
// console.log('arr', arr);

// iterate over array

let names = ['John', 'Jane', 'Doe'];

names.forEach((name, ind) => {
  //   console.log(name, 'invited to the party');
  //   console.log('index:', ind);
});

// reduce

const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((res, number) => res + number, 0);

console.log('result', result);
