function functionVariable() {
  if (true) {
    password = 'myPassword'; // jis pasiekiamas visur
    var varVariable = 'var variable'; // pasiekiamas tik funkcijos ribose
    let letVariable = 'let variable'; // pasiekiamas tik bloko ribose
    const constVariable = 'const variable'; // pasiekiamas tik bloko ribose

    console.log(letVariable);
    console.log(constVariable);
  }

  console.log(varVariable);
}

functionVariable();

console.log(password);
