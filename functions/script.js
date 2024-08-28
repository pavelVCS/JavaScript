function sum(a, b) {
  return a + b;
}

let sum1 = sum(3, 5);
let sum2 = sum(10, 20);

function printArray(arr) {
  if (!Array.isArray(arr)) {
    console.log('ERROR: netinkamas tipas, turi buti array.');
    return;
  }

  for (let item of arr) {
    console.log(item);
  }
}

let names = ['Bob', 'John', 'Alice', 'Ema', 'Kate', 'Steven'];
let cars = ['BMW', 'Audi', 'VW', 'Toyota', 'Mazda', 'Ford'];

printArray(1);
console.log('----------------');
printArray(cars);
