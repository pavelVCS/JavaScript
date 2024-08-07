let age = 12;

if (age >= 18) {
  console.log('Jūs esate pilnametis');
} else if (age >= 16) {
  console.log('Jūs esate paauglys');
} else {
  console.log('Jūs esate vaikas');
}

// logic operators
if (age < 18) {
  if (age >= 16) {
    // kazkoks kodas
  }
}

//   true    &&    false
if (age < 18 && age >= 16) {
  // kazkoks kodas
}

// DRY - Don't Repeat Yourself
// WET - Write Everything Twice
let car = 'Audi';
let carYear = 2009;

if (car === 'BMW' || car === 'Audi') {
  // grazinti automobilio duomenis
}

if (carYear < 2010 && (car === 'BMW' || car === 'Audi')) {
  // grazinti automobilio duomenis
  console.log('Masina:', car, 'Metai:', carYear);
}
