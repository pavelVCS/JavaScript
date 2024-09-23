fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);

    printUser(user);
  })
  .catch((error) => {
    console.log(error);
    document.body.innerHTML = 'An error has occurred. Please try again later.';
  });
