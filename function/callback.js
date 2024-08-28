function main(param, callback) {
  for (let i = 0; i < param.length; i++) {
    callback(param[i], i, param);
  }
}

let arr = ['a', 'b', 'c'];
let phoneNumbers = ['123', '456', '789'];

main(arr, (item) => {
  console.log('this is letter', item);
});

main(phoneNumbers, (item, i) => {
  console.log('this is phone number:', item);
  console.log('this is index:', i);
});
