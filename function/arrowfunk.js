function myFunk() {
  console.log('This is regular function');
}

// myFunk();

// Arrow function
const myArrowFunk = (param) => {
  console.log('This is arrow function', param);
};

// myArrowFunk('passed parameter');

const sum = (a, b) => a + b;

let result = sum(2, 5);

console.log('result', result);
