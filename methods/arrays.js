const names = ['Bob', 'John', 'Alice', 'Ema', 'Kate', 'Steven'];
const cars = ['BMW', 'Audi', 'VW', 'Toyota', 'Mazda', 'Ford'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function iterateArray(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }

  return newArr;
}

const double = iterateArray(numbers, (number) => {
  return number * 2;
});

const tripple = iterateArray(numbers, (number) => {
  return number * 3;
});

const quadruple = numbers.map((num) => num * 4);

console.log(double);
console.log(tripple);
console.log(quadruple);

// iterateArray(names, (item) => {
//   console.log('Hello, ', item);
// });

// iterateArray(cars, (item) => {
//   console.log('Car:', item);
// });

// names.forEach((item, ind) => {
//   console.log('this is forEach: ', item);
//   console.log('index: ', ind);
// });
