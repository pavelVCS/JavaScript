let stage = 'atsiimtas'; // galimos reiksmes: uzsakytas, paruostas, pristatytas, atsiimtas

switch (stage) {
  case 'uzsakytas':
    console.log('Jusu uzsakymas priimtas');
    break;
  case 'paruostas':
    console.log('Jusu uzsakymas paruostas');
    break;
  case 'pristatytas':
    console.log('Jusu uzsakymas pristatytas');
    break;
  case 'atsiimtas':
    console.log('Jusu uzsakymas atsiimtas');
    break;
  default:
    console.log('Tokio uzsakymo nera');
    break;
}

let age = 17;
let pilnametis = age >= 18; // false boolean
let paauglys = age >= 16; // true boolean
console.log('Paauglys:', paauglys);

switch (true) {
  case pilnametis:
    console.log('Jūs esate pilnametis');
    break;
  case paauglys:
    console.log('Jūs esate paauglys');
    break;
  default:
    console.log('Jūs esate vaikas');
    break;
}
