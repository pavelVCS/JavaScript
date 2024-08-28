function defaultFunk(par) {
  console.log('This is your parameter: ', par);
}

const arrowFunk = (param) => {
  console.log('This is an arrow function', param);
};

defaultFunk(123);

arrowFunk('asd');
