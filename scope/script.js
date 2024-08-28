// global scope - pasiekiamas visur mano kode
// function scope - pasiekiamas tik funkcijos viduje: let, const, var
// block scope - pasiekiamas tik bloko viduje (if, ciklai): let, const

const printName = () => {
  if (true) {
    password = 'global variable'; // jis pasiekiamas visur
    var functionName = 'function variable'; // jis pasiekiamas funkcijos viduje
    let myName = 'scope variable'; // jis pasiekiamas tik block scope viduje
    console.log(myName);
  }
  console.log(functionName);
};

printName();
console.log(password);

// let myName = 'global scope name';

// function nameScope() {
//   let myName = 'function scope name';
//   if (true) {
//     let myName = 'block scope name';
//     console.log(myName);
//   }
//   console.log(myName);
// }
// console.log(myName);
// nameScope();
