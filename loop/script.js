for (let i = 0; i < 5; i++) {
  console.log('for ciklo iteracija:', i);
}

// console.log('i po ciklo:', i); // i is not defined

let i = 6;
while (i < 5) {
  console.log('while ciklo iteracija:', i);
  i++;
}

// bent viena karta ciklas suksis
let j = 6;
do {
  console.log('do-while ciklo iteracija:', j);
  j++;
} while (j < 5);

// break ir continue
for (let k = 0; k < 10; k++) {
  if (k === 5) {
    break;
  }
  console.log('break ciklo iteracija:', k);
}

for (let k = 0; k < 10; k++) {
  if (k === 5) {
    continue;
  }
  console.log('continue ciklo iteracija:', k);
}
