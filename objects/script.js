let student = {
  vardas: 'Pavelas',
  kursas: 'JavaScript',
  metai: 2023,
  sodra: true,
  pazymiai: [10, 2, 8, 4],
  masina: {
    marke: 'Audi',
    modelis: 'A6',
    metai: 2018,
    spalva: 'raudona',
  },
};

// taip galime pakeisti rakto reiksme objekte
student.kursas = 'Node.js';

// console.log(student);

// console.log(student.pazymiai[3]);
// console.log(student.masina.spalva);

// apacioje yra masyvas kurio reiksmes yra objektai, panasiai kaip const arr = ["dog", "cat"]
// tik vietoj stringu "dog" ir "cat" yra objektai
const students = [
  {
    vardas: 'Pavelas',
    kursas: 'JavaScript',
    metai: 2023,
    sodra: true,
    pazymiai: [10, 2, 8, 4],
  },
  {
    vardas: 'Evaldas',
    kursas: 'Node.js',
    metai: 2023,
    sodra: true,
    pazymiai: [10, 10, 9, 4],
  },
];

// console.log(students[0]);

// parduotuve

console.log('----parduotuve----');

const parduotuve = {
  pavadinimas: 'Maxima',
  adresas: 'Savanoriu pr. 1',
  darboLaikas: {
    nuo: 10,
    iki: 22,
  },
};

// turime du variantus kaip paimti objekto reiksme
// pirmas variantas:
console.log(parduotuve.pavadinimas);
// antras variantas:
console.log(parduotuve['pavadinimas']);
