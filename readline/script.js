const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let darbuotojai;
let savikaina;
let kaina;

rl.question(`Kiek darbuotoju?`, (value) => {
  darbuotojai = parseInt(value);
  rl.question(`Kokia savikaina?`, (value) => {
    savikaina = parseFloat(value);
    rl.question(`Kokia kaina?`, (value) => {
      kaina = parseFloat(value);

      let pelnas = kaina - savikaina;
      let pelnasVienam = pelnas / darbuotojai;
      console.log('Pelnas:', pelnas);
      console.log('Pelnas vienam darbuotojui:', pelnasVienam);

      rl.close();
    });
  });
});
