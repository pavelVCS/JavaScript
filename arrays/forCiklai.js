//               0      1       2       3        4          5       6
let animals = ['cat', 'dog', 'mouse', 'horse', 'bird', 'elephant', 'lion'];

//              i < 7
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === 'mouse') {
    console.log(animals[i]);
    break;
  }
  console.log('triggered');
}

// -----------------------------------------------
// for of ciklas

for (let item of animals) {
  // console.log(item);
}

// -----------------------------------------------
// for in ciklas

const car = {
  name: 'BMW',
  model: 'GT',
  year: 2017,
  color: 'black',
};

for (let key in car) {
  // console.log(`${key}:  ${car[key]}`);
}

// -----------------------------------------------
// while ciklas

let i = 5;

while (i < 5) {
  console.log('while ciklas', i);
  i++;
}

// -----------------------------------------------
// do while ciklas

do {
  // console.log('do while ciklas', i);
  i++;
} while (i < 5);
