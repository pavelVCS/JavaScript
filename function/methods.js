function createPlayer(name, age, team, points) {
  return {
    name: name,
    age: age,
    team: team,
    points: points,
    printPlayerScore: function () {
      console.log(`Player ${this.name} scored ${this.points} points.`);
    },
    addPoints: function (points) {
      if (typeof points === 'number') {
        this.points += points;
      }
    },
    minusPoints: function (points) {
      if (typeof points === 'number') {
        this.points -= points;
      }
    },
  };
}

const lebron = createPlayer('Lebron', 36, 'Lakers', 30);
const valanciunas = createPlayer('Valanciunas', 29, 'Grizzlies', 20);

lebron.printPlayerScore();
valanciunas.printPlayerScore();

console.log('----');
lebron.minusPoints(10);
valanciunas.minusPoints(5);

lebron.printPlayerScore();
valanciunas.printPlayerScore();
