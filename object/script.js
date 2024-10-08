const juventusClub = {
  name: 'Juventus',
  country: 'Italy',
};

const player = {
  name: 'Ronaldo',
  goals: 700,
  assists: 200,
  team: juventusClub,
  isPlaying: true,
  throphies: ['Golden Ball', 'Golden Boot', 'Champions League'],
};

console.log(`Player ${player.name} has scored ${player.goals} goals`);
player.goals = 702;
console.log(`Player ${player.name} has scored ${player.goals} goals`);

console.log(player);
player.throphies.push('World Cup');
console.log(player);

// ? optional chaining

let car = { year: 2021 }; // undefined

if (car && car.year > 2020) {
  console.log('Car is new');
}

// arba

if (car?.year > 2020) {
  console.log('Car is new');
}

// car && car.year === car?.year
