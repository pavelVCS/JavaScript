let cat = 'cat';
let dog = 'dog';
let mouse = 'mouse';
let gyvunas5 = 'bird';
//                   012345678910
let animalsString = 'cat dog mouse bird';

//                  0  1  2  3  4
let pnoheNumbers = [3, 5, 7, 9, 11];

//               0      1       2       3        4          5
let animals = ['cat', 'dog', 'mouse', 'horse', 'bird', 'elephant'];

console.log(animals);

animals[2] = 'rat';
// animals[6] = 'lion';
animals.push('lion', 'tiger');

console.log('array ilgis: ', animals.length);
console.log(animals);

// console.log('paskutinis gyvunas: ', animals[7]);
//                                               7 - 1 = 6
console.log('paskutinis gyvunas: ', animals[animals.length - 1]);

// let myArr = [1, 4, 5, 'kate', 'bananas', true, false, gyvunas5, animals];
// console.log(myArr);

// -----------------------------------------------

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
