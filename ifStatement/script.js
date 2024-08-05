let age = 16;
let adultAge = 18;

if (age >= adultAge) {
  console.log('Jūs esate pilnametis');
}

let auto = 'manual';
let myCar = 'automatic';

if (auto == myCar) {
  console.log('Jūsų automobilis yra mechaninis');
}

let brandToCheck = 'Audi';
let brand = 'Audi';

if (brandToCheck != brand) {
  console.log('Automobilis nėra Audi');
}

let robotPeace = 1; // number
let yourPeace = '1'; // string

// console.log('robotPeace type:', typeof robotPeace);
// console.log('yourPeace type:', typeof yourPeace);

//     1 number    "1" string
if (robotPeace === yourPeace) {
  console.log('Jus esate taikūs');
  console.log('galite bendradarbiauti');
}

// ternary operator

let myPoints = 90;

let result = myPoints >= 100 ? 'Winner' : 'Loser';

console.log(result);
