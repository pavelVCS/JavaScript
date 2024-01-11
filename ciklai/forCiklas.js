let maxIteration = 5;

for (let i = 0; i <= 5; i++) {
  let randomNum = Math.floor(Math.random() * 20);
  console.log('dabartine iteracija: ', i);
  if (randomNum > 5) {
    console.log('skaicius', randomNum, 'didesnis uz 5');
    break;
  }

  console.log('random skaicius: ', randomNum);
  console.log('-------------------');
}

// for (let i = 0; i < 3; i++) {
//   console.log('i: ', i);
//   for (let j = 0; j < 2; j++) {
//     console.log('j: ', j);
//     break;
//   }
//   console.log('-------------------');
// }

let pradineVerte = 10;
let cikluSkaicius = 99;

if (pradineVerte < cikluSkaicius) {
  for (let i = pradineVerte; i < cikluSkaicius; i++) {
    console.log('i: ', i);
  }
} else {
  console.log('pradine verte yra didesne uz ciklu skaiciu. TAIP NE GALIMA!');
}
