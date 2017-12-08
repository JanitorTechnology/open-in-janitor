// Get the crash report ID.
const crashID = window.location.pathname.split('/').pop();

// Create 'load in janitor' link.
const a = document.createElement('a');
a.href = 'https://janitor.technology/create/?project=firefox-hg&loadcrashdump=' + crashID;
a.target = '_blank';
a.title = 'Load crash dump in Janitor';
a.textContent = 'Load in Janitor';
a.style.backgroundColor = '#007EC6';
a.style.color = 'white';

// Add link to top-right buttons.
const buttons = document.querySelector('#sumo-link');
buttons.insertBefore(a, buttons.firstChild);
