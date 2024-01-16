// bmw masinos objektas
const masina = {
  marke: 'BMW',
  modelis: '320d',
  metai: 2018,
  spalva: 'juoda',
  vairoPadetis: 'kairė',
  degalai: 'b7',
  xdrive: false,
};

for (const key in masina) {
  console.log();

  if (key === 'xdrive') {
    console.log(key);
    console.log(masina[key] ? 'varomas 4x4' : 'galiniai varantys');
    continue;
  }
  console.log(key);
  console.log(masina[key]);
}
