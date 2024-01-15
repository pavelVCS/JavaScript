//               0      1       2       3        4          5
let animals = ['cat', 'dog', 'mouse', 'horse', 'bird', 'elephant'];

for (let i = 0; i < animals.length; i++) {
  console.log('indeksas: ', i, 'reiksme: ', animals[i]);
}

// -----------------------------------------------

for (let value of animals) {
  console.log(value);
}
