const title = document.createElement('h1');
const booksList = document.createElement('ul');
const book1 = document.createElement('li');
const book2 = document.createElement('li');

// add text to the elements
title.textContent = 'Element created using JavaScript';
book1.textContent = 'Book 1';
book2.textContent = 'Book 2';

// add css class to the title.
title.classList.add('titleStyles');
book1.classList.add('bookListItem');
book2.classList.add('bookListItem');

// append elements to the DOM
booksList.appendChild(book1);
booksList.appendChild(book2);

const container = document.getElementById('container');

container.appendChild(title);
container.appendChild(booksList);
