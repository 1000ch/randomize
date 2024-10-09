const $input = document.querySelector('#input');
const $randomize = document.querySelector('#randomize');
const $output = document.querySelector('#output');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const KEY = 'inputs';

$input.addEventListener('input', async () => {
  localStorage.setItem(KEY, $input.value);
});

document.addEventListener('DOMContentLoaded', async () => {
  $input.value = localStorage.getItem(KEY);
});

$randomize.addEventListener('click', async () => {
  const inputs = $input.value.split('\n');

  $output.innerHTML = '';
  while (inputs.length) {
    const index = getRandomInt(inputs.length);
    const target = inputs.splice(index, 1).at(0).trim();

    if (!target) {
      continue;
    }

    const item = document.createElement('li');
    item.textContent = target;
    $output.append(item);
  }
});
