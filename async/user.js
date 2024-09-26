// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user);

//     printUser(user);
//   })
//   .catch((error) => {
//     console.log(error);
//     document.body.innerHTML = 'An error has occurred. Please try again later.';
//   });

// async function
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log(error.message);
    document.body.innerHTML = error.message
      ? error.message
      : 'An error has occurred. Please try again later.';
  }
}

// async arrow function
const fetchUserArrow = async () => {};

fetchUser();
