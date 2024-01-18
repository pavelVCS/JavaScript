let cat = 'cat';
let dog = 'dog';
let mouse = 'mouse';
let gyvunas5 = 'bird';
//                   012345678910
let animalsString = 'cat dog mouse bird';

//                  0  1  2  3  4
let pnoheNumbers = [3, 5, 7, 9, 11];

// kiek vienas zodis masyve turi savo indeksa
//               0      1       2       3        4          5
let animals = ['cat', 'dog', 'mouse', 'horse', 'bird', 'elephant'];

// mes galime pasiimti kazkoki zodi is musu masyvo naudojant indeksa:
console.log(animals[0]); // siuo atveju mes pasiemem 'cat'

animals[2] = 'rat';
// tam kad prideti nauja elementa, mes galime paimti musu sarasa ir
// naudojant sekanti indeksa po paskutinio (musu atveju tai yra 6, nes paskutinis elementas
// 'elephant' turi indeksa 5) nustatyti jam reiksme:
// animals[6] = 'lion';
// taciau, yra geresnis budas, naudojant push komanda. Push komanda prideda elementa i masyvo gala automatiskai
// ir mums nereikia skaiciuoti indekso:
animals.push('lion', 'tiger');

console.log('array ilgis: ', animals.length);
console.log(animals);

// console.log('paskutinis gyvunas: ', animals[7]);
//                                               7 - 1 = 6
console.log('paskutinis gyvunas: ', animals[animals.length - 1]);

// let myArr = [1, 4, 5, 'kate', 'bananas', true, false, gyvunas5, animals];
// console.log(myArr);
