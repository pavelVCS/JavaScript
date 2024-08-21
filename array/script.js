//               0  1  2  3  4
const numbers = [number, 2, 1, 5, 7];

//                 0      1       2          3          4
const animals = ['cat', 'dog', 'parrot', 'rabbit', 'elephant']; // F242J34
const copy = animals; // F242J34

// norint pasiimti reiksmes is masyvo, reikia nurodyti masyvo pavadinima ir norima reiksme pagal jos indeksa
console.log(animals[3]);
animals[3] = 'turtle';
console.log(animals[3]);
console.log(animals);
console.log(copy);

// pridėti naują reikšmę į masyvą su indeksu (paskutinė vieta)
animals[animals.length] = 'horse';
console.log(animals);

// pridėti naują reikšmę į masyvą su push metodu
animals.push('lion', 'bear', 'tiger');
console.log(animals[animals.length - 1]);

//          012345
let name = 'Alice ';

console.log(name[name.length - 1]); // tuščia vieta

let item1 = { name: 'milk', price: 10 };
let item2 = { name: 'bread', price: 5 };
let item3 = { name: 'water', price: 1 };
