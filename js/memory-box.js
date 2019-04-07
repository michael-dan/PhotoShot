const text = document.querySelector('textarea');

document.querySelector('input[type=submit]')
  .addEventListener('click', saveText);

document.querySelector('.load')
  .addEventListener('click', loadText);

function saveText(e) {
  e.preventDefault();
  localStorage['text'] = text.value;
}

function loadText() {
  text.value = localStorage['text'] || '';
}