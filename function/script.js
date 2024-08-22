// introduction to functions
// console.log('-------------- introduction --------------');
function sayHello(value, second) {
  console.log(value);

  if (second) {
    console.log(second);
  }
}

const person = {
  name: 'Jonas',
  age: 99,
};

// sayHello('labas');
// sayHello('hello', person);

// tricky question
// console.log('-------------- tricky question --------------');
function minusTwoNumbers(a, b) {
  console.log(a - b);
}

let a = 4;
let b = 3;

// minusTwoNumbers(b, a); // -1

// return
// console.log('-------------- return --------------');

function formatInfo(playerInfo) {
  return `Player ${playerInfo.name} plays for ${playerInfo.club}.`;
  // code after return will not be executed
}

let messiInfo = {
  name: 'Messi',
  club: 'Barcelona',
  goals: 300,
  assists: 200,
  age: 33,
};

let ronaldoInfo = {
  name: 'Ronaldo',
  club: 'Juventus',
  goals: 400,
  assists: 100,
  age: 35,
};

// console.log(formatInfo(messiInfo)); // formatInfo(messiInfo) === 'Player Messi plays for Barcelona.'
// console.log(formatInfo(ronaldoInfo)); // formatInfo(ronaldoInfo) === 'Player Ronaldo plays for Juventus.'

function doMath(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    yourNumbers: [a, b],
  };
}

// let result = doMath(10, 5);

console.log(doMath(10, 5).yourNumbers.length);
