// array of names
//             0       1       2       3       4
let names = ['Bob', 'John', 'Alice', 'Ema', 'Kate', 'Steven'];

let stringifiedNames = names.toString();
let removedName = names.pop();

console.log(names);
console.log(stringifiedNames);
console.log(`Removed name: ${removedName}`);

console.log(names[0]);

// car object
let car = {
  name: 'BMW',
  model: 'GT',
  year: 2017,
  color: 'black',
  insurance: true,
  owners: ['John', 'Alice', 'Ema', 'Kate'],
  engine: {
    type: 'diesel',
    power: 200,
    volume: 3.0,
  },
};

console.log(car.engine.type);

let carName = ' audi';

console.log(carName[2]);
