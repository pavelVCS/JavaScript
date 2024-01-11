let age = 19;
let ageString = '19';
let car = 'bmw';

let ageMessage = age >= 18 ? 'You can vote' : 'You can not vote';

// console.log(ageMessage);

console.log('age tipas:', typeof age);
console.log('ageString tipas:', typeof ageString);

if (age == ageString) {
  console.log('age and ageString are equal', age * ageString);
}

if (age === ageString) {
  console.log('age and ageString types are equal', age + ageString);
}

if (car == 'bmw') {
  console.log('your car is made in germany');
}

if (age == ageString) {
  console.log('age and ageString are equal');
}

if (age !== ageString) {
  console.log('age and ageString types are not equal');
}

console.log('========================================');

let x = '';

if (x) {
  console.log('x is truthy');
} else {
  console.log('x is falsy');
}

x ? console.log('x is truthy') : console.log('x is falsy');
