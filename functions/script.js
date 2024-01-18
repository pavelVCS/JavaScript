// pasamdom darbuotoja
// pasakome: susumuok du skaicius
// darbuotojas sumuoja du skaicius
// darbuotojas grazina rezultata
// grazinta rezultata naudojam kur mums reikia

function veiksmas(x, y) {
  let result = x + y;
  console.log('x skaicius yra', x);
  console.log('y skaicius yra', y);
  console.log('x + y =', x + y);

  return result;
}

let result = veiksmas(2, 3);
let result2 = veiksmas(5, 5);
console.log('po funkcijos iskvietimo');
console.log(result);
console.log(result2);
