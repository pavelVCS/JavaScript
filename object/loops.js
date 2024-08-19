const car = {
  brand: 'Volvo',
  model: 'XC60',
  year: 2019,
  color: 'black',
  price: 50000,
  country: 'Sweden',
};

// car['brand'] === car.brand

for (let key in car) {
  console.log(key, '-', car[key]); // car['brand'], car['model'], car['year'], ...
}

console.log();
console.log('-------- array of objets ---------');
console.log();

// array of objects
const movies = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Matrix', year: 1999 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Parasite', year: 2019 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Braveheart', year: 1995 },
  { title: 'Titanic', year: 1997 },
  { title: 'Jurassic Park', year: 1993 },
  { title: 'The Green Mile', year: 1999 },
];

for (let movie of movies) {
  console.log(movie.title, 'was released in', movie.year);
}
