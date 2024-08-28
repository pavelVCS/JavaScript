// callback - tai funkcija kuri paduodama kaip parametras i kita funkcija

function doHomework(callback) {
  console.log('Homework done!');
  callback();
  console.log('going to sleep...');
}

doHomework(() => {
  console.log('Playing games');
  console.log('watching TV');
});

console.log('----------------');
doHomework(() => {
  console.log('Going out');
  console.log('Reading a book');
});
