const breadcrumbs = document.querySelector('.breadcrumbs');
if (breadcrumbs) {
  // Get the currently open file path.
  const path = breadcrumbs.lastElementChild.href.split('/mozilla-central/source/')[1];

  // Create 'edit in janitor' link.
  const a = document.createElement('a');
  a.href = 'https://janitor.technology/create/?project=firefox-hg' +
    (path ? '&openfiles=' + path : '');
  a.target = '_blank';
  a.title = 'Open in Janitor';

  // Use a custom https://shields.io badge.
  const img = document.createElement('img');
  img.alt = 'Janitor badge';
  img.src = 'https://img.shields.io/badge/edit-in%20janitor-blue.svg';
  a.appendChild(img);

  const panel = document.querySelector('#panel-content');
  if (panel) {
    // This is a file, install button in the 'Navigation' panel.
    const h4 = document.createElement('h4');
    h4.textContent = 'Janitor';
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    a.classList.add('icon');
    li.appendChild(a);
    ul.appendChild(li);
    panel.appendChild(h4);
    panel.appendChild(ul);
  } else {
    // This is a folder, display the badge on the top right.
    a.style.position = 'absolute';
    a.style.right = '32px';
    breadcrumbs.appendChild(a);
  }
}
