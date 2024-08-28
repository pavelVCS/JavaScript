const fruits = ['apple', 'banana', 'cherry', 'kiwi'];
const data = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'cherry', price: 300 },
  { name: 'kiwi', price: 400 },
];

const title = document.getElementById('title');
title.addEventListener('click', () => {
  title.innerHTML = "<span class='active'>Hello</span>";
});

function showList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  fruits.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;

    ul.appendChild(li);
  });
}

function showData() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  data.forEach((item) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const priceSpan = document.createElement('span');

    nameSpan.textContent = item.name;
    priceSpan.textContent = item.price;

    nameSpan.classList.add('nameSpan');
    priceSpan.classList.add('priceSpan');

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    ul.appendChild(li);
  });
}

const button = document.querySelector('button');
button.addEventListener('click', showData);
