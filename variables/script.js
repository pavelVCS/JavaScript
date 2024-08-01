globalVariable = 1; // pasiekiamas visur, nes yra globalus kintamasis. Nenaudojamas, nes nesaugus
var functionVariable; // pasenes būdas kintamąjį aprašyti. Nenaudojamas, nes nesaugus.
let blockVar; // galima naudoti tik bloke, kuriame yra aprašytas. Galima keisti. Saugus.
const blockConst = 0; // galima naudoti tik bloke, kuriame yra aprašytas. Negalima keisti. Saugus.
//Turi būti priskirta reikšmė iškart.

// Primitive type
const text = 'some text'; // string
let number = 123; // number
let boolean = false; // boolean
let undefinedVariable; // undefined
let nullVariable = null; // null

// console.log('Text type:', typeof text);

// text = 'new text'; // ismes klaida, nes const kintamasis negali buti pakeistas

// Info apie zmogu
let vardas = 'John';
let pavarde = 'Smith';

let pilnasVardas = vardas + ' ' + pavarde;
// console.log('Vardas:', vardas);
// console.log('Pavarde:', pavarde);
// console.log('Pilnas vardas:', pilnasVardas);

let x = 1;
let y = '1';
let result = y + x;

console.log(`Rezultatas: ${result + 1}`);
