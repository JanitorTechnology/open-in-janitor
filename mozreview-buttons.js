const revision = document.querySelector('#review-request-inputs').firstElementChild.value.match(/[0-9a-f]+/)[0];

// Create 'build in janitor' link.
const a = document.createElement('a');
a.href = '#';
a.target = '_blank';
a.title = 'Build patches in Janitor';
a.textContent = 'Janitor ▾';
a.style.color = 'white';

const li = document.createElement('li');
li.classList.add('has-menu');
li.style.backgroundColor = '#007EC6';
li.appendChild(a);

const menu = document.createElement('ul');
menu.classList.add('menu');
menu.style.display = 'none';
menu.innerHTML =
  '<li><a href="https://janitor.technology/create/?project=firefox-hg&revision=' +
  revision + '" target="_blank" title="Build patches on Ubuntu 16.04">Build on Linux</a></li>' +
  '<li><a href="https://janitor.technology/create/?project=firefox-windows&revision=' +
  revision + '" target="_blank" title="Build patches on Windows 10">Build on Windows</a></li>';
li.appendChild(menu);

const buttons = document.querySelector('.actions .actions-right');
buttons.insertBefore(li, buttons.querySelector('.primary'));
